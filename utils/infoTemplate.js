const infoTemplate = ({ confirmed, countryregion, provincestate, deaths, recovered }) => {
  return `
    <div>
      <p><strong>${countryregion} ${provincestate}</strong></p>
      <p>Confirmed: ${confirmed}</p>
      <p>Deaths: ${deaths}</p>
      <p>Recovered: ${recovered}</p>
    </div>
  `;
};

export default infoTemplate;
