import images from "data/beersimages.json";
import React from "react";
import { useSelector } from "react-redux";
import { AutoSizer, List, WindowScroller } from "react-virtualized";
import Beer from "./Beer";
import getBeersListSelector from "./beersListSelector";

const BeersList = () => {
  const beerslist = useSelector((state) =>
    getBeersListSelector(state.beers, state.search)
  );

  const Row = ({ key, style, index }) => {
    const image = images[index % 5].image;
    const beer = beerslist[index];
    return (
      <div key={key} style={style}>
        <Beer image={image} {...beer} />
      </div>
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", height: "100vh" }}>
        <AutoSizer>
          {({ height, width }) => (
            <WindowScroller>
              {({ registerChild, scrollTop }) => (
                <List
                  autoHeight
                  ref={registerChild}
                  scrollTop={scrollTop}
                  height={height}
                  width={width}
                  rowHeight={300}
                  rowCount={beerslist.length}
                  rowRenderer={Row}
                  overscanRowCount={3}
                />
              )}
            </WindowScroller>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default BeersList;
