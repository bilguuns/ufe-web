const PostDetail = ({postData}: any) => {

    return (
        <>
            <h4>{postData.translates[0].title}</h4>
            <p>{postData.translates[0].briefing}</p>
        </>
    );

};

export default PostDetail;