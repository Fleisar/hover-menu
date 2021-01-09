hovermenu = {
    _domClass: 'context-menu',
    _eventHandlers: {
        open: [],
        close: [],
        click: []
    },
    tool: {
        isFunction(func){
            return typeof func !== 'function'
        }
    },
    init(target,content){
        if(target===undefined||content===undefined) return false
        $('.'+this._domClass).html(content)
        this._bind(target)
        return this
    },
    html(content){
        if(content===undefined) return $('.'+this._domClass).html()
        return $('.'+this._domClass).html(content)
    },
    _bind(target){
        $(target).unbind('contextmenu').contextmenu(e=>{
            let main = '.'+this._domClass
            $(main).show().offset({left:e.pageX,top:e.pageY})
            this._eventHandlers.open.length&&
            this._eventHandlers.open.foreach(f=>f(e))
            $('body').unbind('click').click(e=>{
                let target = $(e.target)
                if(target.hasClass(this._domClass))
                    return false // click on context menu
                if(target.parent(main).length)
                    if(target.is('[stay]'))
                        return false // click on child with 'stay' attribute
                    else this._eventHandlers.click.length&&
                    this._eventHandlers.click.foreach(f=>f(e))
                $(main).hide()
                this._eventHandlers.close.length&&
                this._eventHandlers.close.foreach(f=>f(e))
                $('body').unbind('click')
                return false
            })
            return false
        })
        return this
    },
    open(callback){
        this.tool.isFunction(callback)&&
        this._eventHandlers.open.push(callback)
        return this
    },
    close(callback){
        this.tool.isFunction(callback)&&
        this._eventHandlers.close.push(callback)
        return this
    },
    click(callback){
        this.tool.isFunction(callback)&&
        this._eventHandlers.close.push(callback)
        return this
    },
    off(event){
        this._eventHandlers[event] = []
        return this
    }
}
