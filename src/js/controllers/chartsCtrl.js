import Chart from 'chart.js/src/chart.js';


function chartsCtrl($scope, $http, lastfmApiFactory) {

  let globalSettings = Chart.defaults.global;
  globalSettings.defaultFontColor = 'white';
  let globalSettingsTitle = globalSettings.title;
  globalSettingsTitle.fontSize = 24;
  globalSettingsTitle.fontWeight = 'normal';

  let {
    baseUrl,
    user,
    apiKey
  } = lastfmApiFactory;

  let lastfmApiUrl = `${baseUrl}&method=user.gettopartists&user=${user}&api_key=${apiKey}&limit=10`;

  $scope.loading = true;
  $http.get(lastfmApiUrl)
  .success(function(fetchedData) {
    const artistsArr = fetchedData['topartists']['artist'];
    const nameArr = Array.prototype.map.call(artistsArr, (obj) => {
      return obj.name;
    });
    const playcountArr = Array.prototype.map.call(artistsArr, (obj) => {
      return obj.playcount;
    });

    $scope.loading = false;

    // Charts
    const ctx = document.getElementById('topArtists');

    const data = {
      labels: nameArr,
      datasets: [{
        data: playcountArr,
        borderWidth: [2,2,2,2,2,2,2,2,2,2],
        backgroundColor: [
          '#B71C1C',
          '#C62828',
          '#D32F2F',
          '#E53935',
          '#F44336',
          '#EF5350',
          '#E57373',
          '#EF9A9A',
          '#FFCDD2',
          '#FFEBEE'
        ],
        hoverBackgroundColor: [
          '#751212',
          '#861b1b',
          '#962020',
          '#b61b17',
          '#d2190b',
          '#de1814',
          '#d93232',
          '#e55858',
          '#ff818d',
          '#ff9ead'
        ]
      }]
    };
    const options = {
      title: {
        display: true,
        text: 'Top 10 artists'
      },
      legend: {
        position: 'bottom'
      }
    };

    const topArtists = new Chart(ctx, {
      responsive: false,
      type: 'doughnut',
      data,
      options
    });
  });
}

export { chartsCtrl };
