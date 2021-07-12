$(document).ready(function(){


    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",function(response){
        

        for(var i=0;i<response.length;i++){
            var row = $('<tr>').addClass('table-row')
            var td1 = $('<td>').addClass('number').html(response[i].id)
            var td2 = $('<td>')
            var avatar = $('<img>').attr('src',response[i].profilePic)
            td2.append(avatar)
            var td3 = $('<td>').addClass('number').html(response[i].fullName)
            var td4 = $('<td>').html(response[i].dob)
            var td5 = $('<td>').addClass('number').html(response[i].gender)
            var td6 = $('<td>').addClass('number').html(response[i].currentCity)

            row.append(td1,td2,td3,td4,td5,td6)
            $('#tableData').append(row)
            // console.log(row)
        }

    })
    
    $("#search-input").on("keyup",function(){

        var value =$(this).val().toLowerCase();
        if(value.length<=1){
            alert("please at least two characters")
        }else{
            $("#tableData tr").filter(function(){

                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
               });
        }
    });
    $('.reset-btn').keyup(function(){
        location.assign("user.html")
    })

})