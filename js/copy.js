function copy_to_clipboard( elm_id ) {

    var text = document.getElementById( elm_id ).innerHTML;

    navigator.clipboard.writeText( text );

  }
