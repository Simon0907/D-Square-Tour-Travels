import { useNavigate } from "react-router-dom";
import "../css/Package.css";

import maduraiImg from "../assets/Madurai.jpg";
import rameshwaramImg from "../assets/Rameshwaram.webp";
import Kanyakumari from "../assets/kanyakumari.jpeg";
import thiruvananthapuramImg from "../assets/thiruvananthapuram.webp";
import kodaikanalImg from "../assets/Kodaikanal.webp";
import tamilnaduImg from "../assets/tamilnadu.jpg";
import keralaImg from "../assets/kerala-famous.jpg";
function Packages() {
  const navigate = useNavigate();

  const oneDayPackages = [
    {
      id: 1,
      title: "Madurai Heritage Tour",
      image: maduraiImg,
      price: "₹2,999",
      duration: "1 Day",
      itinerary: [
        "Meenakshi Amman Temple",
        "Koodal Alagar Kovil",
        "Thirumalai Nayakkar Palace",
        "Gandhi Museum",
        "Thiruparankundram",
        "Alagar Kovil",
        "Palamuthir Cholai"
      ]
    },
    {
      id: 2,
      title: "Rameshwaram Sacred Pilgrimage",
      image: rameshwaramImg,
      price: "₹3,499",
      duration: "1 Day",
      itinerary: [
        "Sri Arulmigu Ramanathaswamy Temple",
        "Ramas Foot Print",
        "Dr. A.P.J. Abdul Kalam Memorial & House",
        "Lakshmana Theertham",
        "Ramar Theertham",
        "22 Wells & Agni Theertham",
        "Panchamukhi Hanuman Temple",
        "Pamban Bridge",
        "Grothanda Ramar Temple",
        "Dhanushkodi",
        "Arichal Munai (India's Last Point)"
      ]
    },
    {
      id: 3,
      title: "Kanniyakumari Cape Discovery",
      image: kanyakumariImg,
      price: "₹3,299",
      duration: "1 Day",
      itinerary: [
        "Kanniyakumari Amman Temple",
        "Vivekananda Memorial",
        "Thiruvalluvar Statue",
        "Gandhi Museum",
        "Venkateswar Temple (Tirupathi Balaji Temple)",
        "Triveni Sangamam",
        "Sunrise Point",
        "Sunset Point",
        "Watch Tower"
      ]
    },
    {
      id: 4,
      title: "Thiruvananthapuram Royal Tour",
      image: thiruvananthapuramImg,
      price: "₹3,599",
      duration: "1 Day",
      itinerary: [
        "Padmanabha",
        "Padmanabhaswamy Temple",
        "Aazhi Malai Shiva Temple",
        "Poovar Backwater",
        "Aatukkal Bhagavathi Amman Temple",
        "Thiruvananthapuram Zoo",
        "Shangumugam Beach",
        "Kovalam Beach",
        "Lighthouse Beach"
      ]
    },
    {
      id: 5,
      title: "Kodaikanal Hill Escape",
      image: kodaikanalImg,
      price: "₹4,299",
      duration: "1 Day",
      itinerary: [
        "Kodaikanal Lake",
        "Coaker's Walk",
        "Bryant Park",
        "Green Valley View Point",
        "Guna Cave",
        "Pine Forest",
        "Pillar Rock",
        "Meirigai Point",
        "Poomparai Village & Mannavanur Temple",
        "Mannavanur Lake",
        "Rose Garden",
        "Observatory"
      ]
    }
  ];

  const fiveDayTamilNaduPackages = [
    {
      id: 6,
      title: "Tamil Nadu Grand Tour (5 Days)",
      image: tamilnaduImg,
      price: "₹24,999",
      duration: "5 Days & 4 Nights",
      detailedItinerary: [
        {
          day: "Day 1",
          title: "Madurai – The Cultural Capital",
          activities: [
            "Arrival: Reach Madurai by morning (Air/Rail)",
            "Morning: Check into your hotel. Visit the iconic Meenakshi Amman Temple",
            "Afternoon: Visit the Thirumalai Nayakkar Palace",
            "Evening: Stroll through the local markets or visit the Gandhi Memorial Museum",
            "Stay: Madurai"
          ]
        },
        {
          day: "Day 2",
          title: "Kodaikanal – The Princess of Hill Stations",
          activities: [
            "Travel: Madurai to Kodaikanal (~3.5 hours, 120 km)",
            "Morning: Depart early, stop at Silver Cascade Falls",
            "Afternoon: Check into resort. Head to Kodai Lake for boat ride",
            "Evening: Walk along Coaker's Walk, visit Bryant Park",
            "Stay: Kodaikanal"
          ]
        },
        {
          day: "Day 3",
          title: "Rameshwaram – The Holy Island",
          activities: [
            "Travel: Kodaikanal to Rameshwaram (~6.5 hours, 290 km)",
            "Morning: Leave early morning",
            "Afternoon: Cross Pamban Bridge. Visit Ramanathaswamy Temple, take ritual dip in Agni Theertham",
            "Evening: Visit Dr. A.P.J. Abdul Kalam Memorial",
            "Stay: Rameshwaram"
          ]
        },
        {
          day: "Day 4",
          title: "Kanyakumari – The Confluence of Seas",
          activities: [
            "Travel: Rameshwaram to Kanyakumari (~5.5 hours, 310 km)",
            "Morning: Visit Dhanushkodi Ghost Town",
            "Afternoon: Drive towards Kanyakumari",
            "Evening: Witness breathtaking Sunset at Triveni Sangam",
            "Stay: Kanyakumari"
          ]
        },
        {
          day: "Day 5",
          title: "Thiruvananthapuram – The Royal Exit",
          activities: [
            "Travel: Kanyakumari to Trivandrum (~3 hours, 100 km)",
            "Morning: Wake up early for Sunrise. Ferry to Vivekananda Rock Memorial and Thiruvalluvar Statue",
            "Late Morning: Drive to Trivandrum. Stop at Padmanabhapuram Palace",
            "Afternoon: Visit Sree Padmanabhaswamy Temple"
          ]
        }
      ]
    }
  ];

  const fiveDayKeralaPackages = [
    {
      id: 7,
      title: "Kerala Backwaters & Beaches (5 Days)",
      image: keralaImg,
      price: "₹22,999",
      duration: "5 Days & 4 Nights",
      detailedItinerary: [
        {
          day: "Day 1",
          title: "Kochi – The Gateway to Kerala",
          activities: [
            "Arrival: Reach Kochi International Airport or Ernakulam Railway Station",
            "Morning: Explore Fort Kochi - Chinese Fishing Nets, St. Francis Church, Jew Town",
            "Afternoon: Drive towards Munnar (~4 hours, 130 km), passing Valara and Cheeyappara waterfalls",
            "Evening: Check into resort in Munnar",
            "Stay: Munnar"
          ]
        },
        {
          day: "Day 2",
          title: "Munnar – Tea Gardens & Misty Peaks",
          activities: [
            "Morning: Visit Eravikulam National Park, home to Nilgiri Tahr",
            "Afternoon: Visit Tea Museum, Mattupetty Dam and Echo Point",
            "Evening: Visit Photo Point for rolling green hills photo",
            "Stay: Munnar"
          ]
        },
        {
          day: "Day 3",
          title: "Thekkady – Spices & Wildlife",
          activities: [
            "Travel: Munnar to Thekkady (~3 hours, 90 km)",
            "Morning: Drive through spice plantations. Check into hotel",
            "Afternoon: Boating Safari on Periyar Lake",
            "Evening: Watch Kathakali dance-drama and Kalaripayattu martial arts performance",
            "Stay: Thekkady"
          ]
        },
        {
          day: "Day 4",
          title: "Alleppey – The Houseboat Experience",
          activities: [
            "Travel: Thekkady to Alleppey (~4 hours, 140 km)",
            "12:00 PM: Check into Private Houseboat",
            "Afternoon: Cruise through narrow canals and Vembanad Lake",
            "Evening: Boat anchors for the night. Enjoy traditional Kerala meal",
            "Stay: Overnight on Houseboat"
          ]
        },
        {
          day: "Day 5",
          title: "Alleppey to Kochi – Departure",
          activities: [
            "Morning: Final breakfast on water. Disembark by 9:30 AM",
            "Afternoon: Depending on flight/train time, shopping at Lulu Mall or pick up Kerala spices"
          ]
        }
      ]
    }
  ];

  const threeDayTamilNaduPackages = [
    {
      id: 8,
      title: "Kodaikanal Hill Retreat (3 Days)",
      image: kodaikanalImg,
      price: "₹8,999",
      duration: "3 Days & 2 Nights",
      detailedItinerary: [
        {
          day: "Day 1",
          title: "Madurai (Temple) & Kodaikanal (Hills)",
          activities: [
            "08:00 AM: Arrive in Madurai. Go straight to Meenakshi Amman Temple",
            "11:00 AM: Depart for Kodaikanal (~3.5 hours drive)",
            "03:00 PM: Reach Kodaikanal. Check into hotel, head to Kodai Lake for boat ride",
            "05:00 PM: Visit Coaker's Walk for sunset view",
            "Stay: Kodaikanal"
          ]
        },
        {
          day: "Day 2",
          title: "Kodaikanal (Mist) to Rameshwaram (Island)",
          activities: [
            "07:00 AM: Visit Pillar Rocks and Pine Forest",
            "09:30 AM: Start drive to Rameshwaram (~7-8 hours)",
            "05:00 PM: Cross magnificent Pamban Bridge",
            "06:30 PM: Visit Ramanathaswamy Temple for evening darshan",
            "Stay: Rameshwaram"
          ]
        },
        {
          day: "Day 3",
          title: "Dhanushkodi & Kanyakumari (The Tip)",
          activities: [
            "05:00 AM: Head to Dhanushkodi for sunrise at confluence",
            "09:00 AM: Visit Dr. A.P.J. Abdul Kalam Memorial",
            "10:30 AM: Start drive to Kanyakumari (~5.5 hours)",
            "04:00 PM: Ferry to Vivekananda Rock Memorial and Thiruvalluvar Statue",
            "06:00 PM: Witness sunset at Triveni Sangam"
          ]
        }
      ]
    }
  ];

  const threeDayKeralaPackages = [
    {
      id: 9,
      title: "Trivandrum Coastal Escape (3 Days)",
      image: thiruvananthapuramImg,
      price: "₹9,999",
      duration: "3 Days & 2 Nights",
      detailedItinerary: [
        {
          day: "Day 1",
          title: "Into the Clouds (Kochi to Munnar)",
          activities: [
            "Morning: Arrive at Kochi Airport/Station. Start 4-hour drive to Munnar",
            "Afternoon: En route, stop at Cheeyappara and Valara Waterfalls",
            "Evening: Visit Tea Museum or walk through tea plantation",
            "Stay: Mountain resort in Munnar"
          ]
        },
        {
          day: "Day 2",
          title: "Peaks to Palms (Munnar to Alleppey)",
          activities: [
            "Early Morning: Visit Eravikulam National Park to spot Nilgiri Tahr",
            "10:00 AM: Start 4.5-hour drive to Alleppey",
            "01:30 PM: Board Private Houseboat. Enjoy traditional Kerala lunch",
            "Evening: Relax as boat glides past villages. Boat anchors at sunset",
            "Stay: Overnight on Houseboat"
          ]
        },
        {
          day: "Day 3",
          title: "Backwater Bliss & Farewell (Alleppey to Kochi)",
          activities: [
            "Morning: Sunrise cruise and breakfast on water. Disembark by 9:00 AM",
            "Late Morning: Drive to Kochi (~1.5 hours). Visit Fort Kochi Chinese Fishing Nets",
            "Afternoon: Quick stop at Lulu Mall for souvenir shopping"
          ]
        }
      ]
    }
  ];

  const handleViewDetails = (pkg) => {
    navigate("/bookingform", { state: { packageData: pkg } });
  };

  const renderPackageCard = (pkg) => (
    <div key={pkg.id} className="package-card">
      <div className="package-image">
        <img src={pkg.image} alt={pkg.title} />
      </div>
      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        <div className="package-footer">
          <div className="package-price">{pkg.price}</div>
          <button
            type="button"
            className="view-details-btn"
            onClick={() => handleViewDetails(pkg)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="packages-container">
      <div className="packages-header">
        <h1 className="main-title">Explore Our Tour Packages</h1>
        <p className="main-subtitle">
          Discover the beauty of South India with our curated travel experiences
        </p>
      </div>

      <section className="package-section">
        <h2 className="section-title">One Day Tours</h2>
        <div className="packages-grid">
          {oneDayPackages.map(renderPackageCard)}
        </div>
      </section>

      <section className="package-section">
        <h2 className="section-title">5 Days - Tamil Nadu</h2>
        <div className="packages-grid">
          {fiveDayTamilNaduPackages.map(renderPackageCard)}
        </div>
      </section>

      <section className="package-section">
        <h2 className="section-title">5 Days - Kerala</h2>
        <div className="packages-grid">
          {fiveDayKeralaPackages.map(renderPackageCard)}
        </div>
      </section>

      <section className="package-section">
        <h2 className="section-title">3 Days - Tamil Nadu</h2>
        <div className="packages-grid">
          {threeDayTamilNaduPackages.map(renderPackageCard)}
        </div>
      </section>

      <section className="package-section">
        <h2 className="section-title">3 Days - Kerala</h2>
        <div className="packages-grid">
          {threeDayKeralaPackages.map(renderPackageCard)}
        </div>
      </section>
    </div>
  );
}

export default Packages;
