document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
  
    if (file) {
      saveFile(file);
    }
  });
  
  function saveFile(file) {
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var contents = e.target.result;
      var filename = file.name;
      
      // Create a blob with the file content
      var blob = new Blob([contents], { type: 'text/plain' });
  
      // Create a temporary link element to trigger the download
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
  
      // Clean up the temporary link
      link.remove();
    };
  
    reader.readAsText(file);
  }
  