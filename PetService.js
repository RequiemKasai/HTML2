$(document).ready(function(){
  //Function to Load XML file
  function loadXMLData() {
    $.ajax({
      type: "GET",
      url: "data.xml",
      dataType: "xml",
      success: function(xml) {
        var petDayCampSessions = '';

        //Day 1
        $(xml).find('day1').find('session').each(function(){
          var sessionName = $(this).find('name').text();
          var sessionDetails = $(this).find('details').text();
          petDayCampSessions += '<div class="collapsible">';
          petDayCampSessions += '<h3>' + sessionName + '</h3>';
          petDayCampSessions += '<div class="content">' + sessionDetails + '</div>';
          petDayCampSessions += '</div>';
        });
        $('.pet-day-camp-section .collapsible-set:eq(0)').html(petDayCampSessions);

        //Day 2
        var petDayCampSessionsDay2 = '';
        $(xml).find('day2').find('session').each(function(){
          var sessionName = $(this).find('name').text();
          var sessionDetails = $(this).find('details').text();
          petDayCampSessionsDay2 += '<div class="collapsible">';
          petDayCampSessionsDay2 += '<h3>' + sessionName + '</h3>';
          petDayCampSessionsDay2 += '<div class="content">' + sessionDetails + '</div>';
          petDayCampSessionsDay2 += '</div>';
        });
        $('.pet-day-camp-section .collapsible-set:eq(1)').html(petDayCampSessionsDay2);

        //Day 3
        var petDayCampSessionsDay3 = '';
        $(xml).find('day3').find('session').each(function(){
          var sessionName = $(this).find('name').text();
          var sessionDetails = $(this).find('details').text();
          petDayCampSessionsDay3 += '<div class="collapsible">';
          petDayCampSessionsDay3 += '<h3>' + sessionName + '</h3>';
          petDayCampSessionsDay3 += '<div class="content">' + sessionDetails + '</div>';
          petDayCampSessionsDay3 += '</div>';
        });
        $('.pet-day-camp-section .collapsible-set:eq(2)').html(petDayCampSessionsDay3);
      },
      error: function(xhr, status, error) {
        console.error('Error loading XML file:', error);
      }
    });
  }

  //Function to load JSON file
  function loadJSONData() {
    $.getJSON("data.json", function(data) {
      var petsHotelRooms = '';

      // Pets Hotel Rooms
      $.each(data.pets_hotel.rooms, function(index, room){
        var roomName = room.name;
        var roomDetails = room.details;
        petsHotelRooms += '<div class="collapsible">';
        petsHotelRooms += '<h3>' + roomName + '</h3>';
        petsHotelRooms += '<div class="content">' + roomDetails + '</div>';
        petsHotelRooms += '</div>';
      });
      $('.pets-hotel-section').html(petsHotelRooms);
    });
  }

  //Collapsible content 
  $(document).on('click', '.collapsible h3', function() {
    $(this).next('.content').slideToggle();
  });

  //Load XML
  loadXMLData();

  //Load JSON 
  loadJSONData();

  //Back button 
  $('#back-btn').click(function(){
    window.history.back();
  });
});
