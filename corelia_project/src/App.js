import NotificationHeader from "./components/NotificationHeader";
import TopBar from "./components/TopBar";
import CategoriesBar from "./components/CategoriesBar";
import Hero from "./components/Hero";

// Footer Components
import TeachBar from "./components/TeachBar";

import Footer from "./components/Footer";

import GlobalStyle from "./components/GlobalStyle";
import CurrentLearning from "./components/CurrentLearning";

import LearningNext from "./components/LearningNext";
import EnrolledSuggestions from "./components/EnrolledSuggestions";
import WishlistCourses from "./components/WishlistCourses";
import StudentsViewing from "./components/StudentsViewing";


const App = () => {
  return (
    <div className='App'>
      <header>
        <GlobalStyle />
        <NotificationHeader
          contentBold='Start from A$14.99'
          contentLight='Browse thousands of repertoires in a wide variety of collections.'
          bgColor='#8ed1dc'
        />
        <TopBar />
        <CategoriesBar />
        <Hero />
      </header>
      <main>
        <CurrentLearning />
       
        <LearningNext />
        <EnrolledSuggestions />
        <WishlistCourses />
        <StudentsViewing />
      
      </main>
      <footer>
        <TeachBar />
       
        <Footer />
      </footer>
    </div>
  );
};

export default App;
