import { useEffect, useState } from 'react';
import axios from 'axios';

import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

function Charts() {

    const categoryOptions = [
        "Frontend",
        "Backend",
        "Web developer",
        "Cybersecurity",
        "Management",
        "HR",
        "Graphics designer",
        "video editor",
        "Software developer",
        "App developer",
    ];
    const [alljobs, setallJobs] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/alljobs`)
            .then(res => {
                setallJobs(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    if (alljobs.length != 0) {

        // pie
        var active = 0;
        var inactive = 0;
        var today = new Date();
        function convertUTCDateToLocalDate(date) {
            var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
            var offset = date.getTimezoneOffset() / 60;
            var hours = date.getHours();
            newDate.setHours(hours - offset);
            return newDate;
        }
        alljobs.data.map(job => {
            var date = convertUTCDateToLocalDate(new Date(job.closing_date));
            (date > today) ? active++ : inactive++;
        })

        // bar
        var countArr = categoryOptions.map(cat => {
            let count = 0;
            for (let i in alljobs.data) {
                let check = 0;
                for (let entry of alljobs.data[i].category) {
                    if (entry === cat) {
                        check = 1;
                    }
                  }
                if (check) {
                    count++;
                }
            }
            return count;
        })
    }

    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // pie
    const data1 = {
        labels: ['Active', 'Inactive'],
        datasets: [
            {
                label: 'active vs inactive jobs',
                data: [active, inactive],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };
    const option1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Active vs Inactive Jobs',
            },
            style: {
                height: '288px',
                width: '288px',
            }
        },
    };

    // Bar
    const labels = categoryOptions;
    const data2 = {
        labels,
        datasets: [
            {
                label: 'Jobs Title vs vacancy',
                data: countArr,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    const option2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Jobs and their vacancy',
            },
        },
    };

    return (

        <div className='d-flex justify-content-center chartcontainer' style={{ width: '98%', margin: '5px' }}>

            <div className='d-flex justify-content-center align-items-center border border-2 charts' >
                <Bar
                    options={option2}
                    data={data2}
                />
            </div>

            <div className='d-flex justify-content-center overflow-hidden border border-2 charts'>
                <Pie
                    options={option1}
                    data={data1}

                />
            </div>

        </div>
    )
}

export default Charts