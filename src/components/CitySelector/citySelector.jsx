import React, { useRef } from "react";
import Select from "react-select";
import geo from "../../assets/geo.svg";
import Styles from "./citySelector.module.css";

const CitySelector = ({ city, setCity, getGeoLocation }) => {
  const selectRef = useRef(null);

  const selectHandle = () => {
    if (selectRef?.current) {
      selectRef.current.onMenuOpen();
    }
  };

  const options = [
    { value: 'Omsk', label: 'Omsk' },
    { value: 'Petropavlovsk', label: 'Petropavlovsk' },
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Petersburg', label: 'St-Petersburg' },
  ];

  const handleChange = (event) => {
    setCity(event.value);
  };

  const customStyles = {
    valueContainer: defaultStyles => ({
      ...defaultStyles,
      padding: '0',
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      background: 'transparent',
      border: 'none',
    }),
    indicatorsContainer: defaultStyles => ({
      ...defaultStyles,
      display: 'none',
    }),
    placeholder: defaultStyles => ({
      ...defaultStyles,
      color: '#fff',
    }),
    option: provided => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: '#000',
      fontSize: '30px',
      lineHeight: '36px',
    }),
    dropdownIndicator: defaultStyles => ({
      ...defaultStyles,
      color: '#fff'
    })
  };

  return (
    <div className={Styles.city}>
      <Select
        ref={selectRef}
        className={Styles.city__selector}
        arrowRender="OK"
        styles={customStyles}
        value={city}
        onChange={handleChange}
        options={options}
        placeholder={city}
      />
      {/* <select className={Styles.city__select} value={city} onChange={handleChange}>
        <option value="Omsk">Omsk</option>
        <option value="Petropavlovsk">Petropavlovsk</option>
        <option value="Moscow">Moscow</option>
        <option value="Petersburg">St-Petersburg</option>
      </select> */}
      <div className={Styles.city__controller}>
        <span className={Styles.city__text} onClick={selectHandle}>Select City</span>
        <span className={Styles.city__location} onClick={getGeoLocation}>
          <img className={Styles.city__icon} src={geo} alt="geo_icon" />
          <span className={Styles.city__text}>Auto Geolocation</span>
        </span>
      </div>
    </div>
  );
};

export default CitySelector;
