import React from 'react';
import Card from './components/Card';

const App = () => {
  const users = [
    {
      id: 1,
      fullName: "Vipul Kumar Tiwari",
      title: "Frontend Developer",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      coverImage: "https://picsum.photos/800/300?random=1",
      likeCount: 120,
      postCount: 15,
      viewsCount: 2300,
      followed: true,
    },
    {
      id: 2,
      fullName: "Aman Sharma",
      title: "React Developer",
      profile: "https://randomuser.me/api/portraits/men/2.jpg",
      coverImage: "https://picsum.photos/800/300?random=2",
      likeCount: 340,
      postCount: 28,
      viewsCount: 5400,
      followed: false,
    },
    {
      id: 3,
      fullName: "Neha Verma",
      title: "UI/UX Designer",
      profile: "https://randomuser.me/api/portraits/women/3.jpg",
      coverImage: "https://picsum.photos/800/300?random=3",
      likeCount: 560,
      postCount: 42,
      viewsCount: 7800,
      followed: true,
    },
    {
      id: 4,
      fullName: "Rohit Meena",
      title: "Full Stack Developer",
      profile: "https://randomuser.me/api/portraits/men/4.jpg",
      coverImage: "https://picsum.photos/800/300?random=4",
      likeCount: 210,
      postCount: 19,
      viewsCount: 3200,
      followed: false,
    },
    {
      id: 5,
      fullName: "Pooja Singh",
      title: "Backend Developer",
      profile: "https://randomuser.me/api/portraits/women/5.jpg",
      coverImage: "https://picsum.photos/800/300?random=5",
      likeCount: 430,
      postCount: 33,
      viewsCount: 6100,
      followed: true,
    },
    {
      id: 6,
      fullName: "Kunal Jain",
      title: "MERN Stack Developer",
      profile: "https://randomuser.me/api/portraits/men/6.jpg",
      coverImage: "https://picsum.photos/800/300?random=6",
      likeCount: 150,
      postCount: 12,
      viewsCount: 2000,
      followed: false,
    },
    {
      id: 7,
      fullName: "Sneha Gupta",
      title: "Product Designer",
      profile: "https://randomuser.me/api/portraits/women/7.jpg",
      coverImage: "https://picsum.photos/800/300?random=7",
      likeCount: 670,
      postCount: 48,
      viewsCount: 9100,
      followed: true,
    },
    {
      id: 8,
      fullName: "Arjun Patel",
      title: "Software Engineer",
      profile: "https://randomuser.me/api/portraits/men/8.jpg",
      coverImage: "https://picsum.photos/800/300?random=8",
      likeCount: 290,
      postCount: 21,
      viewsCount: 4500,
      followed: false,
    },
    {
      id: 9,
      fullName: "Riya Malhotra",
      title: "Content Creator",
      profile: "https://randomuser.me/api/portraits/women/9.jpg",
      coverImage: "https://picsum.photos/800/300?random=9",
      likeCount: 980,
      postCount: 64,
      viewsCount: 15200,
      followed: true,
    },
    {
      id: 10,
      fullName: "Mohit Yadav",
      title: "DevOps Engineer",
      profile: "https://randomuser.me/api/portraits/men/10.jpg",
      coverImage: "https://picsum.photos/800/300?random=10",
      likeCount: 180,
      postCount: 14,
      viewsCount: 2700,
      followed: false,
    },
  ];
  return (
    <div className='w-full flex justify-center flex-wrap gap-5 p-5'>
      {users.map(function (elem) {
        return <Card user={elem} />
      })}
    </div>
  );
}

export default App;
