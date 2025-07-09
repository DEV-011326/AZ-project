import requests
import random
import sys
from argparse import ArgumentParser

class LocationChanger:
    def __init__(self):
        self.proxies = self._load_proxies()
        self.current_proxy = None
        self.test_urls = [
            'https://api.ipify.org?format=json',
            'http://ip-api.com/json/'
        ]

    def _load_proxies(self):
        return {
            'us': [
                {'ip': '104.248.63.17', 'port': 80},
                {'ip': '138.68.240.218', 'port': 8080},
                {'ip': '167.71.5.83', 'port': 8080},
            ],
            'uk': [
                {'ip': '51.89.160.148', 'port': 3128},
                {'ip': '51.68.207.81', 'port': 8080},
            ],
            'jp': [
                {'ip': '101.132.130.73', 'port': 3128},
                {'ip': '153.126.179.216', 'port': 8080},
            ]
        }

    def _test_proxy(self, proxy):
        """Test if a proxy is working"""
        proxy_url = f"http://{proxy['ip']}:{proxy['port']}"
        proxies = {'http': proxy_url, 'https': proxy_url}
        
        try:
            response = requests.get(
                random.choice(self.test_urls),
                proxies=proxies,
                timeout=5
            )
            return response.status_code == 200
        except:
            return False

    def change_location(self, country_code):
        """Improved version with proxy testing"""
        country_code = country_code.lower()
        if country_code not in self.proxies:
            print(f"⚠️ Country {country_code} not in available list")
            return False

        available_proxies = [p for p in self.proxies[country_code] 
                           if self._test_proxy(p)]
        
        if not available_proxies:
            print(f"❌ No working proxies for {country_code}")
            return False
            
        self.current_proxy = random.choice(available_proxies)
        print(f"✅ Connected to {country_code.upper()} via {self.current_proxy['ip']}")
        return True

def main():
    parser = ArgumentParser()
    parser.add_argument('-c', '--country', required=True, 
                       help='Country code (us, uk, jp)')
    parser.add_argument('-v', '--verbose', action='store_true',
                       help='Show detailed info')
    args = parser.parse_args()

    changer = LocationChanger()
    
    if changer.change_location(args.country):
        if args.verbose:
            changer.get_location_info()

if __name__ == '__main__':
    main()
