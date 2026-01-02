import { div } from "framer-motion/client";
import { FaInstagram, FaXTwitter, FaBehance } from "react-icons/fa6";

export default function Card(user) {
    return (

        <div className="flex flex-row gap-5">
            <div className="w-[320px] rounded-3xl bg-white shadow-xl overflow-hidden">

                {/* Cover Image */}
                <div className="relative h-36 bg-sky-100">
                    <img
                        src={user.user.coverImage}
                        alt="cover"
                        className="h-full w-full object-cover"
                    />

                    {/* Add Button */}
                    <button className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                        +
                    </button>

                    {/* Profile Image */}
                    <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
                        <div className="rounded-full p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-green-400">
                            <img
                                src={user.user.profile}
                                alt="profile"
                                className="h-24 w-24 rounded-full bg-white p-1"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-16 px-6 pb-6 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {user.user.fullName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {user.user.title}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 rounded-xl border py-4">
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{user.user.likeCount}</p>
                            <p className="text-xs text-gray-500">Likes</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{user.user.postCount}</p>
                            <p className="text-xs text-gray-500">Posts</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{user.user.viewsCount}</p>
                            <p className="text-xs text-gray-500">Views</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-5 flex justify-center gap-6 text-gray-600">
                        <FaInstagram size={18} />
                        <FaXTwitter size={18} />
                        <FaBehance size={18} />
                    </div>
                </div>
            </div>
        </div>

    );
}
