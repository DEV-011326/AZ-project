function Qselector(query, selector) {
    if ( query == 'class' | query == '.') {
        return document.getElementsByClassName(selector);
    }else if ( query == 'id' | query == '#') {
        return document.getElementById(selector);
    }else if ( query == 'name' | query == ':') {
        return document.getElementsByName(selector);
    }else if ( query == 'tagname' | query == '<>' | query == 'tag name') {
        return document.getElementsByTagName(selector);
    }else if ( query == 'query' | query == 'Query' | query == 'queryselector' | query == 'querySelector' | query == 'QuerySelector') {
        return document.querySelector(selector);
    }else if ( query == 'queryall' | query == 'QueryAll' | query == 'queryselectorall' | query == 'querySelectorAll' | query == 'QuerySelectorAll') {
        return document.querySelectorAll(selector);
    }
}