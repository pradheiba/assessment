$(document).ready(function(){


    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",function(response){
        

        for(var i=0;i<response.length;i++){
            var row = $('<tr>').addClass('table-row')
            var td1 = $('<td>').addClass('number').html(response[i].id)
            var td2 = $('<td>').html(response[i].customerName)
            var td3 = $('<td>').addClass('number').html(response[i].orderDate)
            var time = $('<p>').addClass('number').html(response[i].orderTime)
            td3.append(time)
            var td4 = $('<td>').html(response[i].amount)
            var td5 = $('<td>').html(response[i].orderStatus)
            row.append(td1,td2,td3,td4,td5)
            // $('#tableData').append(row)
            // console.log(row)
            if(response[i].orderStatus == 'New'){
                $('#tableNew').append(row)
                console.log( $('#tableNew').append(row))
            }
            if(response[i].orderStatus == 'Packed'){
                $('#tablePacked').append(row)
                console.log( $('#tablePacked').append(row))
            }
            if(response[i].orderStatus == 'InTransit'){
                $('#tableTransit').append(row)
                console.log( $('#tableTransit').append(row))
            }
            if(response[i].orderStatus == 'Delivered'){
                $('#tableDelivered').append(row)
                console.log( $('#tableDelivered').append(row))
            }
           
        }

        $("#new").change(function() {
            if(this.checked){
                $('#tableNew').show()
            }else{
                $('#tableNew').hide()
            }
        });
        $("#packed").change(function() {
            if(this.checked){
                $('#tablePacked').show()
            }else{
                $('#tablePacked').hide()
            }
        });
        $("#transit").change(function() {
            if(this.checked){
                $('#tableTransit').show()
            }else{
                $('#tableTransit').hide()
            }
        });
        $("#delivered").change(function() {
            if(this.checked){
                $('#tableDelivered').show()
            }else{
                $('#tableDelivered').hide()
            }
        });
       
    })
})