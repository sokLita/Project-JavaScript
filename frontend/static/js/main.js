// Ensure Chart.js is included: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// BAR CHART: Monthly Stock In vs Out (Fixed data length & improved styling)
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stock In",
        data: [10, 190, 30, 20, 20, 20],
        backgroundColor: "#38bdf8", // sky blue
        borderColor: "#0ea5e9",
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false
      },
      {
        label: "Stock Out",
        data: [80, 140, 200, 50, 60, 70], // Now matches 6 months (fixed original issue)
        backgroundColor: "#6366f1", // indigo
        borderColor: "#4f46e5",
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 14 }, usePointStyle: true }
      },
      title: {
        display: true,
        text: "Monthly Stock Movement",
        font: { size: 18 },
        padding: { bottom: 10 }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748b" }
      },
      y: {
        beginAtZero: true,
        grid: { color: "#e5e7eb" },
        ticks: { color: "#64748b" }
      }
    }
  }
});

// DONUT CHART: Stock Status (matches your colorful gradient UI theme)
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["In Stock", "Low", "Out"],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: ["#22c55e", "#facc15", "#ef4444"], // green, yellow, red
      borderColor: "#ffffff",
      borderWidth: 3,
      hoverOffset: 15
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // Thicker donut ring
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          font: { size: 14 },
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      title: {
        display: true,
        text: "Current Stock Status",
        font: { size: 18 },
        padding: { bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  }
});

// LINE CHART: Weekly Items Trend (smooth & modern)
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Items Sold",
      data: [140, 260, 355, 270, 265, 280, 190],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.15)",
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#2563eb",
      pointBorderWidth: 3,
      pointRadius: 5,
      pointHoverRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Weekly Sales Trend",
        font: { size: 18 }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  }
});

// MINI SPARKLINE: Small clean trend line (white on dark bg, assuming dark container)
new Chart(document.getElementById("miniChart"), {
  type: "line",
  data: {
    labels: ["1","2","3","4","5","6","7"],
    datasets: [{
      data: [220, 240, 230, 250, 245, 260, 255],
      borderColor: "#ffffff",
      backgroundColor: "transparent",
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3
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
    },
    elements: {
      line: { tension: 0.4 }
    }
  }
});