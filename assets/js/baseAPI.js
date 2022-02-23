$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url;
    if (options.url.indexOf('/my/') !== -1) {
        options.Header = localStorage.getItem('token') || '';
    }
    /* options.complete = function(res) {
        //不管成功还是失败都会执行complete方法,判断是否有用户操作权限
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            //清空localStorage,防止用户手写假的token
            localStorage.removeItem('token');
            //跳转至登录页面
            location.href = './login.html';
        }
    } */
})