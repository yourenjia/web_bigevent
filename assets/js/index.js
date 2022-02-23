$(function() {
        getUserInfo();
        var layer = layui.layer;

        $('#btnLogout').on('click', function() {
            //点击退出之后弹出确认层
            layer.confirm('是否退出?', { icon: 3, title: '提示' }, function(index) {
                //do something
                //清空localStroage
                localStorage.removeItem('token');
                location.href = './login.html'
                layer.close(index);
            });
        })

    })
    //获取用户信息
function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        method: 'get',
        success: function(res) {
            console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败');
            }
            //渲染用户头像
            renderAvater(res.data);
        }
    })
}


//渲染用户头像
function renderAvater(user) {
    //1.替换welcome中的字符
    var name = user.nickname || user.username;
    $("#welcome").html('欢迎&nbsp;&nbsp;' + name);
    //2.渲染头像
    if (user.user_pic !== null) {
        //有头像
        $(".layui-nav-img").attr('src', user.user_pic).show();
        $('.text-avatar').hide();
    } else {
        $('.layui-nav-img').hide();
        $('.text-avatar').html(name[0].toUpperCase()).show();
    }
}