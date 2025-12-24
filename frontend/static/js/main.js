// BAR CHART - Stock Movement (Monthly Stock In vs Out)
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stock In",
        data: [10, 190, 30, 20, 20, 20],
        backgroundColor: "#38bdf8",
        borderRadius: 8,
        borderSkipped: false
      },
      {
        label: "Stock Out",
        data: [80, 140, 200, 50, 60, 70],
        backgroundColor: "#6366f1",
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Monthly Stock Movement",
        font: { size: 16 }
      }
    }
  }
});

// DONUT CHART - Current Stock Status
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["In Stock", "Low", "Out of Stock"],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: ["#22c55e", "#facc15", "#ef4444"],
      borderColor: "#ffffff",
      borderWidth: 4
    }]
  },
  options: {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: "Current Stock Status",
        font: { size: 16 }
      }
    }
  }
});

// LINE CHART - Weekly In/Out Trend
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Items Moved",
      data: [140, 260, 355, 270, 265, 280, 190],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#ffffff",
      pointBorderWidth: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Weekly In/Out Trend",
        font: { size: 16 }
      }
    }
  }
});

// MINI SPARKLINE CHART - Small trend in highlight card (white line)
new Chart(document.getElementById("miniChart"), {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [{
      data: [220, 240, 230, 250, 245, 260, 255],
      borderColor: "#ffffff",
      backgroundColor: "transparent",
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});