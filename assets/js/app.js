var requestUrl = 'https://api.github.com/users';

console.log("Console log before Ajax API call");

// Ajax API call

$.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n=========================');
    console.log(response);
  });

console.log("Console log after Ajax API call");
console.log("Console log before Fetch API call");

//Fetch API call

fetch(requestUrl)
  .then(function (response) {
      console.log("Fetch response \n=========================")
      console.log(response);
      return (response.json());
  }).then(function(data) {
      console.log("Fetch response.json()\n=========================")
      console.log(data);
  })

console.log("Console.log after Fetch API call");