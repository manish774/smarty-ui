import React, { useState, useRef, useEffect, useMemo, forwardRef, useCallback } from 'react';

const Breadcrumbs = () => {
    const configs = [
        { label: "Home", navigate: "/l" },
        { label: "Test", navigate: "/test" },
        { label: "Best", navigate: "/test" },
    ];
    const prepareBreadCrumbs = (configs || []).map((config, i) => (React.createElement("span", { key: config.label },
        React.createElement("a", { href: config === null || config === void 0 ? void 0 : config.navigate, key: config.label }, config === null || config === void 0 ? void 0 : config.label),
        (configs === null || configs === void 0 ? void 0 : configs.length) !== i + 1 && " >> ")));
    return React.createElement("div", null, prepareBreadCrumbs);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".success {\r\n  --badge-color: var(--success-color);\r\n}\r\n.primary {\r\n  --badge-color: var(--primary-color);\r\n}\r\n.warning {\r\n  --badge-color: var(--warning-color);\r\n}\r\n.danger {\r\n  --badge-color: var(--danger-color);\r\n}\r\n\r\n[data-badge-type=\"default\"] {\r\n  --bg-color: var(--badge-color);\r\n  --text-color: black;\r\n}\r\n[data-badge-type=\"bordered\"] {\r\n  --text-color: var(--badge-color);\r\n  --border-color: var(--badge-color);\r\n  --bg-color: rgb(40, 44, 40);\r\n}\r\n\r\n.small {\r\n  --badge-font-size: 8px;\r\n  --badge-padding: 5px;\r\n}\r\n.large {\r\n  --badge-font-size: 14px;\r\n  --badge-padding: 14px;\r\n}\r\n.medium {\r\n  --badge-font-size: 10px;\r\n  --badge-padding: 8px;\r\n}\r\n\r\n.badge {\r\n  background-color: var(--bg-color);\r\n  border: 2px solid var(--border-color);\r\n  padding: var(--badge-padding);\r\n  font-size: var(--badge-font-size);\r\n  color: var(--text-color);\r\n  border-radius: 5px;\r\n  margin: 2px;\r\n}\r\n";
styleInject(css_248z$5);

const Badge = (props) => {
    const { label, bgColor = "red", size = "medium", type = "default", theme = "primary", style, } = props;
    return (React.createElement("span", { className: `badge ${size} ${theme}`, "data-badge-type": type, style: style }, label));
};

var css_248z$4 = ".badge-circle-container.large {\n  --size: 20px;\n  --font-size: 20px;\n}\n\n.badge-circle-container.medium {\n  --size: 15px;\n  --font-size: 15px;\n}\n\n.badge-circle-container.small {\n  --size: 10px;\n  --font-size: 10px;\n}\n\n.badge-circle-container.primary {\n  border: 1px solid gray;\n  background-color: var(--primary-color);\n}\n\n.badge-circle-container.warning {\n  border: 1px solid darkgoldenrod;\n  background-color: var(--warning-color);\n}\n\n.badge-circle-container.success {\n  border: 1px solid darkgreen;\n  background-color: var(--success-color);\n}\n\n.badge-circle-container.danger {\n  border: 1px solid darkred;\n  background-color: var(--danger-color);\n}\n\n.badge-circle-container {\n  padding: var(--size);\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n  background-color: orange;\n  display: inline-block;\n  font-size: var(--font-size);\n  font-weight: 700;\n  color: white;\n}\n\n.badge-circle-container:not(:first-child) {\n  margin-left: -15px;\n}";
styleInject(css_248z$4);

const CircleBadge = (props) => {
    const { labels, size = "medium", customColor, type = "primary", style, title, } = props;
    const mLabel = labels === null || labels === void 0 ? void 0 : labels.map((label) => {
        var _a;
        return (React.createElement("span", { className: `badge-circle-container ${size} ${type}`, title: label, key: label, style: style }, (_a = label === null || label === void 0 ? void 0 : label.split(" ")) === null || _a === void 0 ? void 0 : _a.map((l) => { var _a; return (_a = l[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase(); })));
    });
    return React.createElement(React.Fragment, null, mLabel);
};

const selectSubarray = (array, startIndex, endIndex) => {
    const subarray = array.slice(startIndex, endIndex + 1);
    return subarray;
};
const ASC = "asc";
const DESC = "desc";
const sortRecords = (records, key, order) => {
    const sortedArray = [...records];
    sortedArray.sort((a, b) => {
        const valueA = String(a[key]).toLowerCase();
        const valueB = String(b[key]).toLowerCase();
        if (order === ASC) {
            if (valueA < valueB)
                return -1;
            if (valueA > valueB)
                return 1;
            return 0;
        }
        else if (order === DESC) {
            if (valueA > valueB)
                return -1;
            if (valueA < valueB)
                return 1;
            return 0;
        }
        return 0;
    });
    return sortedArray;
};
const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

var css_248z$3 = "@charset \"UTF-8\";\n.table-container,\n.theme-light {\n  margin: 5px;\n  padding: 15px;\n  height: 100%;\n  background-color: var(--bg-panel);\n  transition: color 0.2s ease, background 0.2s ease;\n  border-radius: 5px;\n  box-shadow: var(--shadow-theme);\n}\n.table-container .table-main,\n.theme-light .table-main {\n  overflow: scroll;\n}\n.table-container .clear-button,\n.theme-light .clear-button {\n  position: relative;\n  background-color: rgba(255, 0, 0, 0);\n  left: -30px;\n  border: none;\n  cursor: pointer;\n  z-index: 10;\n}\n.table-container .display-none,\n.theme-light .display-none {\n  visibility: hidden;\n}\n.table-container table,\n.theme-light table {\n  width: 100%;\n  margin: 10px;\n  border-collapse: separate;\n  border-spacing: 0;\n  border-radius: 5px;\n  overflow: hidden;\n  background: var(--bg-panel);\n}\n.table-container table tbody,\n.theme-light table tbody {\n  max-height: 500px;\n}\n.table-container th,\n.table-container td,\n.theme-light th,\n.theme-light td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid var(--selected-item);\n  font-size: 14px;\n}\n.table-container th,\n.theme-light th {\n  background-color: var(--table-header);\n}\n.table-container tr:hover,\n.theme-light tr:hover {\n  background-color: var(--table-header);\n}\n.table-container .sort.asc::after,\n.theme-light .sort.asc::after {\n  content: \" ↑\";\n}\n.table-container .sort.desc::after,\n.theme-light .sort.desc::after {\n  content: \" ↓\";\n}\n.table-container .drop-options,\n.theme-light .drop-options {\n  height: 20px;\n  margin: 5px;\n}\n.table-container .table-pagination,\n.theme-light .table-pagination {\n  text-align: center;\n}\n.table-container .footer-container,\n.theme-light .footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table-container .footer-container .row-count,\n.theme-light .footer-container .row-count {\n  display: inline-block;\n}\n.table-container .footer-container .table-pagination,\n.theme-light .footer-container .table-pagination {\n  display: flex;\n  align-items: center;\n}\n\n.theme-dark {\n  color: white !important;\n  background-color: #28282b;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.theme-dark .table-main {\n  min-height: 400px;\n}\n.theme-dark .clear-button {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0);\n  left: -30px;\n  border: none;\n  cursor: pointer;\n  z-index: 10;\n}\n.theme-dark .display-none {\n  visibility: hidden;\n}\n.theme-dark table {\n  width: 100%;\n  margin: 10px;\n  border-collapse: separate;\n  border-spacing: 0;\n  border-radius: 5px;\n  overflow: hidden;\n  background: #28282b;\n  color: white;\n  box-shadow: 5px 5px 15px #141414, -5px -5px 15px #0f0c0c;\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.theme-dark table tbody {\n  max-height: 500px;\n}\n.theme-dark th,\n.theme-dark td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: var(--selected-item);\n  font-size: 14px;\n}\n.theme-dark th {\n  background-color: #28282b;\n}\n.theme-dark tr:hover {\n  background-color: #e0e0e0;\n}\n.theme-dark .table-pagination {\n  text-align: center;\n}\n.theme-dark .footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.theme-dark .footer-container .row-count {\n  display: inline-block;\n}\n.theme-dark .footer-container .table-pagination {\n  display: flex;\n  align-items: center;\n}\n\n@media screen and (max-width: 768px) {\n  .footer-container {\n    flex-direction: column;\n  }\n  .footer-container .table-pagination {\n    margin-top: 10px;\n  }\n  .footer-container .input-container {\n    margin-top: 10px;\n  }\n}";
styleInject(css_248z$3);

var css_248z$2 = "@charset \"UTF-8\";\n.input-container input {\n  width: 200px;\n  height: 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: var(--bg-panel);\n  box-shadow: var(--shadow-theme);\n  padding: 10px;\n  outline: none;\n  color: var(--text-color);\n  transition: box-shadow 0.3s ease-in-out;\n}\n.input-container input:hover {\n  box-shadow: var(--shadow-theme);\n}\n.input-container input:focus {\n  box-shadow: var(--shadow-theme), var(--shadow-theme-focus);\n  color: var(--text-color);\n}\n\n.panel-simple {\n  padding: 5px;\n  align-items: left;\n  background-color: #d7d9d2;\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  justify-content: center;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #444;\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n\n.neumorphic-select {\n  position: relative;\n  width: 200px;\n  background-color: var(--bg-panel);\n  color: var(--text-color);\n  border-radius: 10px;\n  box-shadow: var(--shadow-theme);\n  overflow: hidden;\n}\n.neumorphic-select .selected-option {\n  background-color: lightgray !important;\n}\n\nselect {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  outline: none;\n  background: none;\n  appearance: none;\n  font-size: 16px;\n  color: #333;\n  cursor: pointer;\n}\n\n.neumorphic-select::after {\n  content: \"▼\"; /* Unicode character for down arrow */\n  font-size: 20px;\n  color: #555;\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n\n.neumorphic-select:hover {\n  box-shadow: var(--shadow-theme);\n}";
styleInject(css_248z$2);

const paginationOptions = [5, 10, 25, 50, 100];

const TableRows = ({ record, column, config, columnNumber }) => {
    var _a, _b;
    const [showRowOptions, setShowRowOptions] = useState(false);
    const rowOptionsRef = useRef(null);
    const toggleOptions = () => {
        setShowRowOptions(!showRowOptions);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            var _a;
            if (rowOptionsRef.current &&
                //@ts-ignore
                !((_a = rowOptionsRef === null || rowOptionsRef === void 0 ? void 0 : rowOptionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event === null || event === void 0 ? void 0 : event.target))) {
                setShowRowOptions(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);
        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, [rowOptionsRef]);
    const prepareOptionsView = () => {
        return (React.createElement("span", { style: { float: "right" }, ref: rowOptionsRef }, (column === null || column === void 0 ? void 0 : column.hoverAction) ? (React.createElement("div", null,
            React.createElement("div", { onClick: (e) => {
                    e.stopPropagation();
                    toggleOptions();
                }, className: "cursor-pointer" }, "..."),
            showRowOptions && (React.createElement("span", { className: "panel-simple", style: { position: "absolute" } }, column === null || column === void 0 ? void 0 : column.hoverAction.map((option) => (React.createElement("li", { key: option.name, className: `cursor-pointer drop-options`, onClick: (e) => {
                    e.stopPropagation();
                    option === null || option === void 0 ? void 0 : option.onclick(record);
                    setShowRowOptions(false);
                }, style: { height: "20px", width: "200px" } }, option.name))))))) : ("")));
    };
    return (React.createElement("td", { style: {
            textAlign: "left",
            borderLeft: (column === null || column === void 0 ? void 0 : column.highLight) && `1px solid ${(_a = column === null || column === void 0 ? void 0 : column.highLight) === null || _a === void 0 ? void 0 : _a.color}`,
            borderRight: (column === null || column === void 0 ? void 0 : column.highLight) && `1px solid ${(_b = column === null || column === void 0 ? void 0 : column.highLight) === null || _b === void 0 ? void 0 : _b.color}`,
        }, key: generateRandomString(10) },
        (column === null || column === void 0 ? void 0 : column.render) ? column === null || column === void 0 ? void 0 : column.render(record) : record[column === null || column === void 0 ? void 0 : column.id],
        prepareOptionsView()));
};

const useDebounce = (value, delay = 500) => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debounce;
};

var css_248z$1 = ".label {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  color: #ffffff; /* Text color for dark theme */\r\n}\r\n\r\n.label-text {\r\n  margin-left: 16px;\r\n}\r\n\r\n.toggle {\r\n  isolation: isolate;\r\n  position: relative;\r\n  height: 20px;\r\n  width: 40px;\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  box-shadow: -8px -4px 8px 0px #1a2026, 8px 4px 12px 0px #394a56,\r\n    4px 4px 4px 0px #394a56 inset, -4px -4px 4px 0px #1a2026 inset;\r\n}\r\n\r\n.toggle-state {\r\n  display: none;\r\n}\r\n\r\n.indicator {\r\n  height: 100%;\r\n  width: 200%;\r\n  background: #394a56; /* Background color for dark theme */\r\n  border-radius: 15px;\r\n  transform: translate3d(-75%, 0, 0);\r\n  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);\r\n  box-shadow: -8px -4px 8px 0px #1a2026, 8px 4px 12px 0px #394a56;\r\n}\r\n\r\n.toggle-state:checked ~ .indicator {\r\n  transform: translate3d(25%, 0, 0);\r\n}\r\n";
styleInject(css_248z$1);

const Select = (props) => {
    var _a, _b;
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(props === null || props === void 0 ? void 0 : props.selected);
    useEffect(() => {
        setOptions((props === null || props === void 0 ? void 0 : props.options) || []);
    }, [props === null || props === void 0 ? void 0 : props.options]);
    const prepareOption = useMemo(() => (options || []).map((option) => (React.createElement("option", { value: option === null || option === void 0 ? void 0 : option.value, className: `${selectedValue}` === `${option === null || option === void 0 ? void 0 : option.value}` ? "selected-option" : "", key: generateRandomString(10) }, option === null || option === void 0 ? void 0 : option.name))), [options, selectedValue]);
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: `${(_a = props === null || props === void 0 ? void 0 : props.options[0]) === null || _a === void 0 ? void 0 : _a.value}` }, props === null || props === void 0 ? void 0 :
            props.label,
            ":"),
        React.createElement("select", { className: "neumorphic-select", onChange: (e) => {
                props === null || props === void 0 ? void 0 : props.onchangeHandler(e);
                setSelectedValue(e.target.value);
            }, id: `${(_b = props === null || props === void 0 ? void 0 : props.options[0]) === null || _b === void 0 ? void 0 : _b.value}`, style: { height: "40px" }, value: selectedValue },
            React.createElement("option", { value: "" }, "Select"),
            prepareOption)));
};

var css_248z = "/* Styles for left position */\n.label-left {\n  display: inline-block;\n  text-align: left;\n}\n\n/* Styles for right position */\n.label-right {\n  display: inline-block;\n  text-align: right;\n}\n\n/* Styles for above position */\n.label-above {\n  display: block;\n  margin-bottom: 5px; /* Adjust as needed */\n}\n\n/* Styles for below position */\n.label-below {\n  display: block;\n  margin-top: 5px; /* Adjust as needed */\n}\n\n/* Additional styling for the input field */\ninput {\n  /* Add common input styles here */\n  width: 200px; /* Adjust as needed */\n  margin-top: 5px; /* Adjust as needed */\n}";
styleInject(css_248z);

const Input = forwardRef((props, ref) => {
    const { onchangeHandler, className, debounceTime = 100 } = props;
    const [inputValue, setInputValue] = useState((props === null || props === void 0 ? void 0 : props.value) || (props === null || props === void 0 ? void 0 : props.min) || undefined);
    const [eventObject, setEventObject] = useState();
    const debounceInput = useDebounce(eventObject, debounceTime);
    const labelPositionClasses = {
        left: "left",
        right: "right",
        above: "above",
        below: "below",
    };
    useEffect(() => {
        onchangeHandler(debounceInput);
    }, [debounceInput]);
    const changeHandler = (e) => {
        var _a, _b;
        if ((props === null || props === void 0 ? void 0 : props.type) === "number" &&
            (props === null || props === void 0 ? void 0 : props.max) &&
            parseInt((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value) > (props === null || props === void 0 ? void 0 : props.max)) {
            return e.preventDefault();
        }
        setEventObject(e);
        setInputValue((_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: `label-${labelPositionClasses[(props === null || props === void 0 ? void 0 : props.labelPosition) || "left"]}` }, props === null || props === void 0 ? void 0 : props.label),
        React.createElement("input", Object.assign({ ref: ref, type: props === null || props === void 0 ? void 0 : props.type, onChange: changeHandler, value: inputValue, min: props === null || props === void 0 ? void 0 : props.min, max: props === null || props === void 0 ? void 0 : props.max, placeholder: props === null || props === void 0 ? void 0 : props.placeholder, multiple: (props === null || props === void 0 ? void 0 : props.multiple) || false }, props === null || props === void 0 ? void 0 : props.otherProps, { style: props === null || props === void 0 ? void 0 : props.style, className: className }))));
});

const TableFooter = ({ rowCount, handleInputChange, totalPage, currentPagination, paginationRequired, changeItemPerPage, paginationOptions, itemPerPage, }) => {
    return (React.createElement("div", { className: "footer-container" },
        React.createElement("div", { className: "row-count" },
            "Total records (",
            rowCount,
            ")"),
        paginationRequired && (React.createElement("div", { className: "table-pagination" },
            React.createElement("div", { className: "input-container" },
                React.createElement(Input, { onchangeHandler: handleInputChange, type: "number", max: totalPage, min: 1, value: currentPagination || 1 }),
                React.createElement("span", { style: { marginLeft: "5px" } },
                    "of ",
                    totalPage)))),
        React.createElement("div", { className: "input-container" },
            React.createElement(Select, { onchangeHandler: changeItemPerPage, options: paginationOptions.map((p) => ({ name: p, value: p })), selected: itemPerPage, label: "per page" }))));
};

const Toggle = ({ style, label, onToggle }) => {
    return (React.createElement("div", { style: style },
        React.createElement("label", { className: "label" },
            React.createElement("div", { className: "toggle" },
                React.createElement(Input, { className: "toggle-state", type: "checkbox", value: "check", onchangeHandler: () => {
                        onToggle();
                    } }),
                React.createElement("div", { className: "indicator" })),
            React.createElement("div", { className: "label-text" }, label))));
};

const TableHeader = ({ searchInTable, title, clearInput, searchText, mode, changeTheme, }) => {
    return (React.createElement("div", { className: "footer-container" },
        React.createElement("div", { className: "table-title" }, title),
        React.createElement("div", null, mode && (React.createElement("div", null,
            React.createElement(Toggle, { style: { position: "relative", top: "0px" }, label: "Mode", onChangeTheme: changeTheme })))),
        React.createElement("div", { className: "table-search" },
            React.createElement("div", { className: "input-container", style: { textAlign: "right" } },
                React.createElement("input", { className: "search", onChange: searchInTable, placeholder: "search...", value: searchText }),
                React.createElement("button", { className: `clear-button ${!searchText && "display-none"}`, onClick: clearInput }, "\u00D7")))));
};

const Table = ({ records, config, pageSize }) => {
    const [currentPagination, setCurrentPagination] = useState(1);
    const [currentRecord, setCurrentRecords] = useState([]);
    const [completeRecord, setCompleteRecord] = useState(records || []);
    const [rowCount, setRowCount] = useState((records === null || records === void 0 ? void 0 : records.length) || 0);
    const [columnSortState, setColumnSortState] = useState({});
    const [columnNames, setColumnNames] = useState();
    const [itemPerPage, setItemPerPage] = useState(pageSize || 5);
    const [searchText, setSearchText] = useState("");
    const debounceSearch = useDebounce(searchText, 1000);
    const [theme, setTheme] = useState("light");
    const selectedRecord = useRef(null);
    const [totalPage, setTotalPage] = useState(Math.ceil((completeRecord === null || completeRecord === void 0 ? void 0 : completeRecord.length) / itemPerPage));
    const [currentIndexes, setCurrentIndexes] = useState({
        startIndex: 0,
        offset: itemPerPage,
    });
    const { columns, title } = config; //To-do : make column name form this column and values from column render
    const sortableColumns = useMemo(() => columns.filter((col) => (col === null || col === void 0 ? void 0 : col.sortable) === true).map((co) => co.id), [columns]);
    const sortColumn = (key, order) => {
        setCompleteRecord(sortRecords(completeRecord, key, order));
    };
    useEffect(() => {
        const sortColumnObject = {};
        setColumnSortState((prevColumnSortState) => {
            return Object.assign(Object.assign({}, prevColumnSortState), sortColumnObject);
        });
    }, []);
    useEffect(() => {
        //setTimeout(() => {}, 3000);
        setColumnNames(() => {
            return columns.map((rec, i) => {
                var _a;
                return (React.createElement(React.Fragment, null,
                    i === 0 && (config === null || config === void 0 ? void 0 : config.checkbox) && (React.createElement("th", null, (config === null || config === void 0 ? void 0 : config.selectAll) && (React.createElement(Input, { type: "checkbox", value: "", onchangeHandler: () => { }, style: { width: "20px" } })))),
                    React.createElement("th", { style: { background: (rec === null || rec === void 0 ? void 0 : rec.highLight) && ((_a = rec === null || rec === void 0 ? void 0 : rec.highLight) === null || _a === void 0 ? void 0 : _a.color) }, onClick: () => {
                            //@ts-ignore
                            if (sortableColumns.includes(rec === null || rec === void 0 ? void 0 : rec.id)) {
                                sortColumn(rec === null || rec === void 0 ? void 0 : rec.id, columnSortState[rec === null || rec === void 0 ? void 0 : rec.id]);
                                setColumnSortState(() => ({
                                    [rec === null || rec === void 0 ? void 0 : rec.id]: columnSortState[rec === null || rec === void 0 ? void 0 : rec.id] === ASC ? DESC : ASC,
                                }));
                            }
                        }, className: `sort ${columnSortState[rec === null || rec === void 0 ? void 0 : rec.id]} `, key: columnSortState[rec === null || rec === void 0 ? void 0 : rec.id] }, rec === null || rec === void 0 ? void 0 : rec.name)));
            });
        });
    }, [columnSortState, completeRecord, itemPerPage]);
    const searchableColumns = useMemo(() => columns.filter((col) => (col === null || col === void 0 ? void 0 : col.searchable) === true).map((co) => co.id), [columns]);
    const getTotalPage = (rec) => {
        return Math.ceil((rec === null || rec === void 0 ? void 0 : rec.length) / itemPerPage);
    };
    useEffect(() => {
        let start = itemPerPage * currentPagination - itemPerPage;
        let end = itemPerPage * currentPagination - 1;
        setCurrentIndexes({ startIndex: start, offset: end });
    }, [currentPagination, itemPerPage]);
    useEffect(() => {
        const paginatedRecords = selectSubarray(completeRecord, currentIndexes === null || currentIndexes === void 0 ? void 0 : currentIndexes.startIndex, currentIndexes === null || currentIndexes === void 0 ? void 0 : currentIndexes.offset);
        setCurrentRecords(paginatedRecords);
    }, [currentPagination, completeRecord, currentIndexes]);
    useEffect(() => {
        if (searchText) {
            const newRecords = records === null || records === void 0 ? void 0 : records.filter((rec) => {
                const searchValue = searchText === null || searchText === void 0 ? void 0 : searchText.toString().toLowerCase();
                return searchableColumns.some((column) => {
                    var _a, _b;
                    const columnValue = (_b = (_a = rec[column]) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                    return columnValue === null || columnValue === void 0 ? void 0 : columnValue.includes(searchValue);
                });
            });
            setCompleteRecord(newRecords);
            setTotalPage(getTotalPage(newRecords));
            setRowCount(newRecords === null || newRecords === void 0 ? void 0 : newRecords.length);
        }
        else {
            setCompleteRecord(records);
            setCurrentIndexes({ startIndex: 0, offset: itemPerPage - 1 });
            setTotalPage(getTotalPage(records));
            setRowCount(records === null || records === void 0 ? void 0 : records.length);
        }
    }, [debounceSearch, records, searchableColumns, itemPerPage]);
    const searchInTable = useCallback((e) => {
        var _a;
        setCurrentPagination(1);
        setSearchText((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
    }, [columnNames, itemPerPage]);
    const handleInputChange = (e) => {
        var _a, _b;
        if (((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value) > totalPage)
            return e.preventDefault();
        if ((_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.value)
            setCurrentPagination(() => e.target.value);
        // setFind(e.target.value);
    };
    const createCellContent = (record, column, index) => {
        return (React.createElement(TableRows, { record: record, column: column, config: config, columnNumber: index }));
    };
    const rows = currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.map((record) => (React.createElement("tr", { key: generateRandomString(10) },
        (config === null || config === void 0 ? void 0 : config.checkbox) && (React.createElement("td", null,
            React.createElement(Input, { type: "checkbox", style: { width: "20px" }, onchangeHandler: () => {
                    selectedRecord.current = [record];
                }, value: JSON.stringify(record) }))), columns === null || columns === void 0 ? void 0 :
        columns.map((col, i) => createCellContent(record, col, i)))));
    const changeItemPerPage = (e) => {
        var _a;
        setItemPerPage(parseInt((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value));
    };
    const clearInput = () => {
        setSearchText("");
    };
    useEffect(() => {
        setTotalPage(Math.ceil((completeRecord === null || completeRecord === void 0 ? void 0 : completeRecord.length) / itemPerPage));
    }, [itemPerPage, currentRecord]);
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };
    return (React.createElement("div", { className: `table-container ${`theme-${theme}`}` },
        React.createElement(TableHeader, { searchInTable: searchInTable, title: title, clearInput: clearInput, searchText: searchText, mode: config === null || config === void 0 ? void 0 : config.mode, changeTheme: changeTheme }),
        React.createElement("div", { className: "table-main" },
            React.createElement("table", { style: { minHeight: (config === null || config === void 0 ? void 0 : config.minHeight) || "" }, key: generateRandomString(10) },
                React.createElement("thead", null,
                    React.createElement("tr", null, columnNames)),
                React.createElement("tbody", null,
                    rows,
                    !(completeRecord === null || completeRecord === void 0 ? void 0 : completeRecord.length) && (React.createElement("tr", null,
                        React.createElement("td", { colSpan: 3 }, "No records found")))))),
        React.createElement(TableFooter, { rowCount: rowCount, handleInputChange: handleInputChange, totalPage: totalPage, currentPagination: currentPagination, paginationRequired: (config === null || config === void 0 ? void 0 : config.paginationRequired) || false, changeItemPerPage: changeItemPerPage, paginationOptions: paginationOptions, itemPerPage: itemPerPage })));
};

const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => { },
});

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    const toggleTheme = (newTheme) => {
        // const val = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, props === null || props === void 0 ? void 0 : props.children));
};

export { Badge, Breadcrumbs, CircleBadge, Input, Select, Table, TableFooter, TableHeader, ThemeContext, ThemeProvider };
//# sourceMappingURL=index.js.map
