import React, { useEffect, useState } from 'react';
import './style.css';
import SearchBar from './Components/SearchBar';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((datas) => {
        let temp = [];
        datas.forEach((data) => temp.push(data.title));
        setData(temp);
      });
  }, []);

  return (
    <div>
      {data.length>0&&<SearchBar data={data} placeholder="type Something..." />}
    </div>
  );
}
