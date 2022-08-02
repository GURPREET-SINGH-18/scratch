import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import MyNavbar from "./components/MyNavbar";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";


function App({ complete_list, update_list }) {

  // Update Lists of Mid Area
  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];

    const old_list = complete_list.midAreaLists;
    let source_index = old_list.findIndex(
      (x) => x.id === result.source.droppableId
    );

    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1);
      old_list[source_index].comps = comp_list;
    }

    let dest_index = old_list.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (dest_index > -1) {
      let dest_comp_list = old_list[dest_index].comps;
      dest_comp_list.splice(result.destination.index, 0, `${element}`);
      old_list[dest_index].comps = dest_comp_list;
    }
  };
  
  return (
    <>
    <MyNavbar/>
    <div className="bg-red-200 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
      <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-red-50 border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-red-50 border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
    </>
  );
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    complete_list: state.list,
  };
};

export default connect(mapStateToProps)(App);
