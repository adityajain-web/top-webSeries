import React from 'react';
import Card from './Card';
import series from '../SeriesData';

const AmazonSeries = series.filter(entry => entry.ott === "Amazon");
const newArr = AmazonSeries.map(item => {
    return <Card imgSrc={item.imgSrc} title={item.title} sName={item.sName} link={item.link} />
})

const Amazon = () => {
    return (<>
        {newArr}
    </>)
}

export default Amazon;