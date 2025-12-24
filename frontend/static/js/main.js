// BAR CHART
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stock In",
        data: [120, 190, 300, 250, 220, 260],
        backgroundColor: "#38bdf8"
      },
      {
        label: "Stock Out",
        data: [80, 140, 200, 180, 160, 210],
        backgroundColor: "#6366f1"
      }
    ]
  }
});

// DONUT
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["In Stock", "Low", "Out"],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: ["#22c55e", "#facc15", "#ef4444"]
    }]
  }
});

// LINE
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Items",
      data: [40, 60, 55, 70, 65, 80, 90],
      borderColor: "#2563eb",
      fill: false,
      tension: 0.4
    }]
  }
});

// MINI
new Chart(document.getElementById("miniChart"), {
  type: "line",
  data: {
    labels: ["1","2","3","4","5","6","7"],
    datasets: [{
      data: [20,40,30,50,45,60,55],
      borderColor: "#fff",
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } }
  }
});
