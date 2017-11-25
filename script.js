new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: [" % stock", "% capacidad almacenamiento"],
      datasets: [
        {
          label: "% Capacidad de bodega v/s % Stock",
          backgroundColor: ["#a7d445", "#a32828"],
          data: [95, 5]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Capacidad de bodega'
      },
     responsive: false
   }
});

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1 ,2, 3, 4],
    datasets: [{ 
        data: [12, 20, 25, 10, 29],
        label: "Unidades Vendidas",
        borderColor: "#3e95cd",
        fill: false
      }, 
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Tiempo en stock'
    },
    
    responsive: false
  }
});


