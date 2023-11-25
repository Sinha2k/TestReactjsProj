const renderPageObjectData = (id, label, options) => {
  return {
    id: id,
    label: label,
    options: options,
  };
};

const dataPage = [
  renderPageObjectData(0, "Home", [
    renderPageObjectData(0, "Home 1 - Background Image", []),
    renderPageObjectData(1, "Home 2 - Youtube Video", []),
    renderPageObjectData(2, "Home 3 - Google Inspired", []),
    renderPageObjectData(3, "Home 4 - Travel site", []),
  ]),
  renderPageObjectData(1, "Tours", [
    renderPageObjectData(0, "Tour 1 - Background Image", [
      renderPageObjectData(0, "Tour 1", []),
      renderPageObjectData(1, "Tour 2", []),
      renderPageObjectData(2, "Tour 3", []),
    ]),
    renderPageObjectData(1, "Tour 2 - Youtube Video", []),
    renderPageObjectData(2, "Tour 3 - Google Inspired", []),
    renderPageObjectData(3, "Tour 4 - Travel site", []),
  ]),
  renderPageObjectData(2, "Booking", [
    renderPageObjectData(0, "Booking 1 - Background Image", []),
    renderPageObjectData(1, "Booking 2 - Youtube Video", []),
    renderPageObjectData(2, "Booking 3 - Google Inspired", []),
    renderPageObjectData(3, "Booking 4 - Travel site", []),
  ]),
  renderPageObjectData(3, "Destinations", [
    renderPageObjectData(0, "Destinations 1 - Background Image", []),
    renderPageObjectData(1, "Destinations 2 - Youtube Video", []),
    renderPageObjectData(2, "Destinations 3 - Google Inspired", []),
    renderPageObjectData(3, "Destinations 4 - Travel site", []),
  ]),
  renderPageObjectData(4, "Pages", [
    renderPageObjectData(0, "Pages 1 - Background Image", []),
    renderPageObjectData(1, "Pages 2 - Youtube Video", []),
    renderPageObjectData(2, "Pages 3 - Google Inspired", []),
    renderPageObjectData(3, "Pages 4 - Travel site", []),
  ]),
  renderPageObjectData(5, "Blogs", [
    renderPageObjectData(0, "Blogs 1 - Background Image", []),
    renderPageObjectData(1, "Blogs 2 - Youtube Video", []),
    renderPageObjectData(2, "Blogs 3 - Google Inspired", []),
    renderPageObjectData(3, "Blogs 4 - Travel site", []),
  ]),
  renderPageObjectData(6, "Shortcodes", [
    renderPageObjectData(0, "Shortcodes 1 - Background Image", []),
    renderPageObjectData(1, "Shortcodes 2 - Youtube Video", []),
    renderPageObjectData(2, "Shortcodes 3 - Google Inspired", []),
    renderPageObjectData(3, "Shortcodes 4 - Travel site", []),
  ]),
  renderPageObjectData(7, "Shop", [
    renderPageObjectData(0, "Shop 1 - Background Image", []),
    renderPageObjectData(1, "Shop 2 - Youtube Video", []),
    renderPageObjectData(2, "Shop 3 - Google Inspired", []),
    renderPageObjectData(3, "Shop 4 - Travel site", []),
  ]),
];

export default dataPage;
