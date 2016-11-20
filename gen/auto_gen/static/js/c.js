$(document).on("click","#arcade-button",function(){



$.ajax({
        url: '/auto_gen/start_slip/',
        type:'POST',
        dataType: 'html',
        data: {
            id: '1'
        },
        success: function(data) {
        
    }
    });

})