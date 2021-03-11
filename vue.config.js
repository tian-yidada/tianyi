module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '100.64.225.184:8080',

        hot: true,

        disableHostCheck: true,

    }



};

