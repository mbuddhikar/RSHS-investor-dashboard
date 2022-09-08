import Navbar from '../Navbar/Navbar';  // import Navbar component
import Summary from '../investor/Summary';  // import summary component 
import Surveysummary from '../investor/Surveysummary';  //import Surveysummary component 

{/*creating Dashboard functional component */ }
const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      {/* calling the Nav bar component */}
      <Navbar />
    
      <div style={{ marginLeft: 50 }}>
        <h2 style={{ marginLeft: 10, marginTop: 20, color: "#FF7F50" }} >Summary of Market Analysis</h2>
         {/* calling the Summary component */}
       <Summary />
        <h2 style={{ marginLeft: 10, marginTop: 20, color: "#FF7F50" }} >Summary of Consumer survey</h2>
          {/* calling the Surveysummary component */}
        <Surveysummary />
      </div>
    </div>
  );
};

export default Dashboard;