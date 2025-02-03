import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Cards
          title="The Enchanted Forest"
          desc="Step into a mystical world where trees whisper secrets and the air is filled with magic. Explore hidden paths and discover ancient ruins. Let the enchantment guide your journey."
          src="https://via.placeholder.com/300x150?text=Enchanted+Forest"
        />
        <Cards
          title="Ocean's Deep"
          desc="Dive into the azure depths of the ocean. Encounter vibrant marine life and explore sunken treasures. Feel the serenity and mystery of the underwater world."
          src="https://via.placeholder.com/300x150?text=Ocean's+Deep"
        />
        <Cards
          title="Mountain Peaks"
          desc="Reach new heights with breathtaking mountain vistas. Experience the thrill of climbing and the serenity of untouched nature. Embrace the challenge and the reward of the summit."
          src="https://via.placeholder.com/300x150?text=Mountain+Peaks"
        />
        <Cards
          title="Urban Jungle"
          desc="Navigate the bustling streets of a vibrant city. Discover hidden gems in the heart of the metropolis. Feel the pulse of urban life and the charm of cityscapes."
          src="https://via.placeholder.com/300x150?text=Urban+Jungle"
        />
        <Cards
          title="Desert Oasis"
          desc="Find tranquility in the vast expanse of golden sands. Discover lush oases and experience the serene beauty of desert landscapes. Let the calm and quiet rejuvenate your spirit."
          src="https://via.placeholder.com/300x150?text=Desert+Oasis"
        />
        <Cards
          title="Cosmic Voyage"
          desc="Embark on a journey through the stars. Explore distant galaxies and marvel at the wonders of the universe. Let your imagination soar beyond the confines of Earth."
          src="https://via.placeholder.com/300x150?text=Cosmic+Voyage"
        />
        <Cards
          title="Rainforest Adventure"
          desc="Journey through the dense and vibrant rainforest. Discover exotic wildlife and hidden waterfalls. Immerse yourself in the lush, green canopy."
          src="https://via.placeholder.com/300x150?text=Rainforest+Adventure"
        />
        <Cards
          title="Savannah Safari"
          desc="Experience the thrill of a safari in the sprawling savannah. Witness majestic wildlife in their natural habitat. Feel the raw beauty and power of the wild."
          src="https://via.placeholder.com/300x150?text=Savannah+Safari"
        />
        <Cards
          title="Polar Expedition"
          desc="Brave the icy wilderness of the polar regions. Encounter unique wildlife and stunning glaciers. Embrace the challenge of the frozen frontier."
          src="https://via.placeholder.com/300x150?text=Polar+Expedition"
        />
        <Cards
          title="Ancient Civilizations"
          desc="Travel back in time to explore ancient civilizations. Uncover the mysteries of lost cities and forgotten cultures. Marvel at the ingenuity and artistry of the past."
          src="https://via.placeholder.com/300x150?text=Ancient+Civilizations"
        />
        <Cards
          title="Galactic Empire"
          desc="Venture into the realms of a distant galactic empire. Encounter advanced civilizations and uncharted planets. Explore the boundaries of space and time."
          src="https://via.placeholder.com/300x150?text=Galactic+Empire"
        />
        <Cards
          title="Fantasy Realm"
          desc="Enter a world of fantasy and wonder. Encounter mythical creatures and magical landscapes. Embark on epic quests and forge your own legend."
          src="https://via.placeholder.com/300x150?text=Fantasy+Realm"
        />
        <Cards
          title="Medieval Castle"
          desc="Explore the grandeur of ancient castles. Walk through majestic halls and uncover the history of medieval fortresses. Feel the echoes of bygone eras."
          src="https://via.placeholder.com/300x150?text=Medieval+Castle"
        />
        <Cards
          title="Tropical Beach"
          desc="Relax on pristine sandy shores and enjoy crystal-clear waters. Discover tropical paradises and experience the ultimate beach getaway."
          src="https://via.placeholder.com/300x150?text=Tropical+Beach"
        />
        <Cards
          title="Snowy Village"
          desc="Wander through a charming snowy village nestled in a winter wonderland. Enjoy cozy cabins, snow-covered trees, and the serenity of a quiet snowfall."
          src="https://via.placeholder.com/300x150?text=Snowy+Village"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
