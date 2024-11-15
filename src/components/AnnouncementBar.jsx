function AnnouncementBar({ title }) {
    return (
        <div className="h-12 flex items-center text-center light-gray-bg-custom dark:bg-zinc-800">
            <span className="grow text-white text-sm font-light tracking-wide">
                {title}
            </span>
        </div>
    );
}

export default AnnouncementBar;
