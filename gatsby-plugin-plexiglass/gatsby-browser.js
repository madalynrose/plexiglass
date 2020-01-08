export const onInitialClientRender = (_, pluginOptions) => {
    if(process.env.NODE_ENV === 'development'){
        const { noMouseDay, obscureScreen } = pluginOptions
        let date = new Date()
        let dayOfWeek = date.getDay()
        if(!noMouseDay || dayOfWeek === noMouseDay){
            import('no-mouse-days')
            if(obscureScreen === true){
                import('./obscureScreen.css')
            }
        }
    }
}
    