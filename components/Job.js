import Link from 'next/link';

const Job = ({ job, isDashboard }) => {
	const isPublished = () => (
		<>
			{isDashboard && job.isPublished && (
				<span className="bg-black text-white uppercase text-sm p-2 mr-5">
					✅ Published
				</span>
			)}
			{isDashboard && !job.isPublished && (
				<span className="bg-black text-white uppercase text-sm p-2 mr-5">
					❌ Unpublished
				</span>
			)}
		</>
	);
	return (
		<div className="mb-4 mt-20 pl-16 pr-16">
			<Link href={`/job/${job.id}`}>
				<a className="text-xl font-bold underline">{job.title}</a>
			</Link>
			<h2 className="text-base font-normal mt-3">{job.description}</h2>
			<div className="mt04">
				{isPublished()}
				<h4 className="inline">Posted By</h4>
				{/* <div className="ml-3 -mt-6 inline"> */}
				<span>
					<Link href={`/company/${job.author.id}`}>
						<a className="text-base font-medium color-primary underline">
							{job.author.name}
						</a>
					</Link>
				</span>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Job;
