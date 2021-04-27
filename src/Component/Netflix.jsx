import React from 'react';
import Card from './Card';
import series from '../SeriesData';

const NetflixSeries = series.filter(entry => entry.ott === "Netflix");
const newArr = NetflixSeries.map(item => {
    return <Card imgSrc={item.imgSrc} title={item.title} sName={item.sName} link={item.link} />
})

const Netflix = () => {
    return (<>
        {newArr}
    </>)
}

export default Netflix;