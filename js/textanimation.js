class  TextAnimation {
    constructor(el){
        this.str = document.querySelector('.head-word');
        this.els = this.str.innerHTML.trim().split('');
        this.str.innerHTML = this._split();
    }

    _split(){
        return this.els.reduce(function(acuu,curr){
            curr = curr.replace(' ','nbsp;');
            return `${acuu}<span class='char'>${curr}</span>`
        },'');
    }
}

