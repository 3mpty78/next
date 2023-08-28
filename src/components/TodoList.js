import { useState } from "react";
import Filters from "./Filters";

// Import des icons
import trash from "../assets/icons/effacer.png";

export default function TodoList() {
      const [item, setItem] = useState("");
      const [itemList, setItemList] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState("");

      const handleItem = (event) => {
            setItem(event.target.value);
      };

      const postItem = () => {
            const newItem = {
                  text: item,
                  category: selectedCategory,
                  checked: false,
            };

            setItemList([...itemList, newItem]);
            setItem("");
            setSelectedCategory("");
      };

      const removeItem = (index) => {
            const updatedList = itemList.filter((_, i) => i !== index);
            setItemList(updatedList);
      };

      const toggleChecked = (index) => {
            const updatedList = itemList.map((item, i) => {
                  if (i === index) {
                        return { ...item, checked: !item.checked };
                  }
                  return item;
            });
            setItemList(updatedList);
      };

      const handleCategoryChange = (category) => {
            setSelectedCategory(category);
      };

      // Drag and Drop
      const handleDragStart = (e, index) => {
            e.dataTransfer.setData("text/plain", index);
      };
      const handleDragOver = (e) => {
            e.preventDefault();
      };
      const handleDrop = (e, index) => {
            e.preventDefault();
            const targetId = e.dataTransfer.getData("text/plain");

            if (targetId !== index) {
                  const updatedList = itemList.slice();
                  const targetIndex = updatedList.findIndex(
                        (item) => index === targetId
                  );
                  const currentIndex = updatedList.findIndex((item) => index);

                  const [movedItem] = updatedList.splice(targetIndex, 1);
                  updatedList.splice(currentIndex, 0, movedItem);

                  setItemList(updatedList);
            }
      };

      return (
            <>
                  <div className="todolist">
                        <Filters
                              selectedCategory={selectedCategory}
                              onCategoryChange={handleCategoryChange}
                        />
                        <div className="searchInput">
                              <input
                                    type="text"
                                    placeholder="Fruits, nettoyer la cuisine, ..."
                                    onChange={handleItem}
                                    value={item}
                                    required={true}
                              />
                              <button
                                    disabled={
                                          selectedCategory !== "" && item !== ""
                                                ? false
                                                : true
                                    }
                                    className="button"
                                    onClick={() => postItem()}>
                                    Ajouter
                              </button>
                              <div className="itemList">
                                    {itemList.map((item, index) => {
                                          if (
                                                !selectedCategory ||
                                                item.category ===
                                                      selectedCategory
                                          ) {
                                                return (
                                                      <div
                                                            key={index}
                                                            draggable={true}
                                                            onDragStart={(e) =>
                                                                  handleDragStart(
                                                                        e,
                                                                        index
                                                                  )
                                                            }
                                                            onDragOver={(e) =>
                                                                  handleDragOver(
                                                                        e
                                                                  )
                                                            }
                                                            onDrop={(e) =>
                                                                  handleDrop(
                                                                        e,
                                                                        index
                                                                  )
                                                            }
                                                            className={`item ${
                                                                  item.checked
                                                                        ? "checked"
                                                                        : ""
                                                            }`}>
                                                            <input
                                                                  type="checkbox"
                                                                  checked={
                                                                        item.checked
                                                                  }
                                                                  onChange={() =>
                                                                        toggleChecked(
                                                                              index
                                                                        )
                                                                  }
                                                            />
                                                            <p className="task">
                                                                  {item.text}
                                                            </p>
                                                            <p
                                                                  className={`category`}>
                                                                  {
                                                                        item.category
                                                                  }
                                                            </p>
                                                            <button
                                                                  className="remove"
                                                                  onClick={() =>
                                                                        removeItem(
                                                                              index
                                                                        )
                                                                  }>
                                                                  <img
                                                                        className="trash"
                                                                        src={
                                                                              trash
                                                                        }
                                                                        alt="trash icon"
                                                                  />
                                                            </button>
                                                      </div>
                                                );
                                          }
                                          return null;
                                    })}
                              </div>
                        </div>
                  </div>
            </>
      );
}
