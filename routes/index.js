var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let list3 = [
    
    {
      name: "Alleppey",
      desc: "Alleppey or Alappuzha is best known for the world renowned backwaters of Kerala. The backwaters are a network of brackish canals, rivers and lakes that weave through half of the state of Kerala. One can cruise down the backwaters while enjoying the unique feel of the “Kettuvallams” or house boats which provide amenities including a taste of typical Kerala cuisine. For other curious travellers, there are several unique temples and churches which add more value to the picturesque beauty of Alleppey",
    },
    { name: "Kochi",desc:"Kochi is the cultural and economic capitals of Kerala. Its a hub of tourist activity and attracts visitors from all over the world. From Chinese fishing nets to exotic spice cultivations, there’s a lot to feast your eyes upon in Kochi. This city is an amalgamation of various cultures which seek to endure even till date. There’s a surprise in every corner of Kochi, just waiting to be discovered." },
    { name: "Thekkady", desc: "Thekkady is home to the popular Periyar Wildlife Sanctuary. You can observe the elephants that roam around the sanctuary, explore the verdant green forests, take a boat cruise over Periyar Lake or take an elephant safari into the depths of the wilderness. Periyar is the perfect getaway for wildlife enthusiasts and for people who want to rejuvenate in the misty mountains of the Nilgiris." },
    { name: "Munnar", desc: "Munnar is considered one of the most beautiful tourist places in Kerala. Situated on the Western Ghats, Munnar is evidently one of the highest producers of tea on the Indian subcontinent. The view of undulating hills as the touch the clouds in Munnar rejuvenates your mind and soul. The town is flanked by a narrow patch of the Arabian Sea and The Western Ghats on the other side which makes Munnar a unique getaway from the city life. Palm-fringed backwaters, scenic waterfalls, sunny beaches, misty mountains and gushing streams, Munnar has it all!" },
  ];
  res.render("index", { list3 });
});

module.exports = router;
