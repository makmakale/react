function IntroNavigation() {
  return (
    <>
      <h2>Navigation</h2>
      <ul style={{ marginLeft: 20 }}>
        <li>
          You can use <i className="bx bx-left-arrow-alt" /> / <i className="bx bx-right-arrow-alt" /> buttons
          to navigate between pages.
        </li>
        <li>
          You can use <strong>Home / End</strong> key buttons to navigate to the
          <strong> first / last</strong> pages.
        </li>
        <li>
          If your last opened page was not the first one, after you open the portfolio once again, the book will open
          automatically and will navigate you to the last opened page.
        </li>
      </ul>
    </>
  );
}

export default IntroNavigation;
