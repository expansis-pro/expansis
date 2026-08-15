import React from 'react';

const VimeoEmbed = ({ videoId, title = 'Video explicativo Expansis Pro' }) => {
	return (
		<div className='w-full max-w-4xl mx-auto my-12 px-4'>
			<div className='relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#020617]'>
				<iframe
					src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
					frameBorder='0'
					allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media'
					className='absolute top-0 left-0 w-full h-full'
					title={title}></iframe>
			</div>
		</div>
	);
};

export default VimeoEmbed;
