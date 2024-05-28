import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useQuery } from "@tanstack/react-query";
import {
  FaCar,
  FaCookie,
  FaDelicious,
  FaMoneyBill,
  FaMoneyCheckAlt,
  FaProductHunt,
  FaUser,
} from "react-icons/fa";

const AdminHome = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartStat = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order-stats`);
      return res.data;
    },
  });

  // pic chart start

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#B51B75",
    "#FFD0D0",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartStat.map((chart) => {
    return { name: chart.category, value: chart.revenue };
  });

  return (
    <div>
      <div className="p-6">
        <h1 className="font-semibold text-2xl">
          Hi, Welcome Back! {user?.displayName}
        </h1>
      </div>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaMoneyBill size={30}></FaMoneyBill>
            </div>
            <div className="stat-title font-semibold">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUser size={25} />
            </div>
            <div className="stat-title font-semibold">Customers</div>
            <div className="stat-value">{stats.allUser}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaProductHunt size={25} />
            </div>
            <div className="stat-title font-semibold">Products</div>
            <div className="stat-value">{stats.productMenu}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCar size={30} />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats.order}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <BarChart
              width={600}
              height={400}
              data={chartStat}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartStat.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div>
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
