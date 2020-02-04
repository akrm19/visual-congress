import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = (props) => {
  const isEmpty  = !props.data || props.data.length === 0;
  const svgRef = useRef(null);
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const chartHeight = props.height || 200;
  const chartWidth = props.height || 200;
  const radius = Math.min(chartHeight, chartWidth) / 2;
  const pie = d3
    .pie()
    .value(function(entry) {
      return entry.value;
    });
  const arc = d3.arc()  
    .innerRadius(0)
    .outerRadius(radius);

  useEffect(() => {
    if(isEmpty) return;

    let svg = d3.select(svgRef.current);
    let group = svg
      .append('g')
      .attr('transform', 'translate(' + chartWidth / 2 +  ',' + chartHeight / 2 + ')');
    let arcGroups = group.selectAll('path')
      .data(pie(props.data ))
      .enter()
        .append('path')
        // .attr('class', 'arc')
        .attr('fill', function (d,i) {
          return color(i);
        })
        .attr('d', arc);
  }, []);


  return ( 
    <div>
      <svg height={chartHeight} width={chartWidth} ref={svgRef}/>
    </div>
   );
}
 
export default PieChart;