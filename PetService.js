$(document).ready(function(){
  // Function to load data from XML file
  function loadXMLData() {
    $.ajax({
      type: "GET",
      url: "data.xml",
      dataType: "xml",
      success: function(xml) {
        // Process XML data here
        var groomingServices = '';
        var petsHotelRooms = '';
        var petDayCampSessions = '';

        // Grooming Services
        $(xml).find('grooming').find('service').each(function(){
          groomingServices += '<div class="grid-item">' + $(this).text() + '</div>';
        });
        $('.grooming-section .grid-container').html(groomingServices);

        // Pets Hotel Rooms
        $(xml).find('pets_hotel').find('room').each(function(){
          var roomName = $(this).find('name').text();
          var roomDetails = $(this).find('details').text();
          petsHotelRooms += '<div class="collapsible">';
          petsHotelRooms += '<h3>' + roomName + '</h3>';
          petsHotelRooms += '<div class="content">' + roomDetails + '</div>';
          petsHotelRooms += '</div>';
        });
        $('.pets-hotel-section').html(petsHotelRooms);

        // Pet Day Camp Sessions
        $(xml).find('pet_day_camp').find('session').each(function(){
          var sessionName = $(this).find('name').text();
          var sessionDetails = $(this).find('details').text();
          petDayCampSessions += '<div class="collapsible">';
          petDayCampSessions += '<h3>' + sessionName + '</h3>';
          petDayCampSessions += '<div class="content">' + sessionDetails + '</div>';
          petDayCampSessions += '</div>';
        });
        $('.pet-day-camp-section .collapsible-set').html(petDayCampSessions);
      },
      error: function(xhr, status, error) {
        console.error('Error loading XML file:', error);
      }
    });
  }

  // Function to load data from JSON file
  function loadJSONData() {
    $.getJSON("data.json", function(data) {
      // Process JSON data here
    });
  }

  // Toggle collapsible content on click
  $(document).on('click', '.collapsible h3', function() {
    $(this).next('.content').slideToggle();
  });

  // Load data from XML file
  loadXMLData();

  // Load data from JSON file
  loadJSONData();
  
  $(document).ready(function(){
  // Back button functionality
  $('#back-btn').click(function(){
    window.history.back();
  });
});
