$(".button-collapse").sideNav();


  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
//   $(document).on('show.bs.modal', '.modal', function () {
//     var zIndex = 1040 + (10 * $('.modal:visible').length);
//     $(this).css('z-index', zIndex);
//     setTimeout(function() {
//         $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
//     }, 0);
// });
//
// $(document).on('hidden.bs.modal', '.modal', function () {
//     $('.modal:visible').length && $(document.body).addClass('modal-open');
// });
  // $('.modal').modal({
  //      dismissible: true, // Modal can be dismissed by clicking outside of the modal
  //      opacity: .5, // Opacity of modal background
  //      inDuration: 300, // Transition in duration
  //      outDuration: 200, // Transition out duration
  //      startingTop: '4%', // Starting top style attribute
  //      endingTop: '10%', // Ending top style attribute
  //      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
  //        alert("Ready");
  //        console.log(modal, trigger);
  //      },
  //      complete: function() { alert('Closed'); } // Callback for Modal close
  //    }
  //  );
