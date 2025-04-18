import React, { Fragment, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  Title,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale } from "chart.js";
import { Box, Text, VStack } from "@chakra-ui/react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchProgressStats = async () => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated progress data (in percentage)
      const apiResponse = {
        JavaScript: 85,
        Python: 90,
        Go: 40,
        Firebase: 70,
        React: 80,
        AI: 60,
        "Data Science": 65,
        "Machine Learning": 55,
        "Data Structure & Algorithm": 75,
        Health: 30,
        LLM: 50,
      };

      setChartData({
        labels: Object.keys(apiResponse),
        datasets: [
          {
            label: "Learning Progress (%)",
            data: Object.values(apiResponse),
            backgroundColor: [
              "#F7DF1E", // JavaScript
              "#306998", // Python
              "#00ADD8", // Go
              "#FFA611", // Firebase
              "#61DBFB", // React
              "#FF6384", // AI
              "#36A2EB", // Data Science
              "#FF9F40", // Machine Learning
              "#4BC0C0", // DSA
              "#9966FF", // Health
              "#C9CBCF", // LLM
            ],
            borderWidth: 1,
          },
        ],
      });
    };

    fetchProgressStats();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <Box w={"100%"}>
      <Text textAlign={"center"} fontSize={"18px"} my={4}>
        Trending courses as of today
      </Text>
      <VStack
        w={"100%"}
        mx={"auto"}
        height={"500px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Bar data={chartData} width={"100%"} height={"100%"} />
      </VStack>
    </Box>
  );
};

export default Charts;
