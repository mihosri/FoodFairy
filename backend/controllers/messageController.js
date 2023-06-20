import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';

/**
 * @author Sri
 * @route GET /api/message 
 * @desc Returns a random document from MongoDB
 * @access Public
 */
const getMessage = asyncHandler( async (req, res) => {
    
    try {
        
        //Generate and return a fortune message randomly from DB
        const response = await Message.aggregate([{$sample:{size: 1}}]);
        
        res.status(200).json(response[0].message);
    
    } catch (error) {
        res.status(401);
        throw new Error('Sorry, something went wrong');
    }
});


/**
 * @author Sri
 * @route POST /api/message 
 * @desc Post a bunch of messages in DB
 * @access Private
 */
// const addMessage = asyncHandler( async (req, res) => {
    
//     try {
        
//         const messages = [
//             { message: 'The cure for love is more love'},
//             { message: 'Baby steps Big Changes'},
//             { message: 'You have a secret admirer'},
//             { message: 'Good luck comes from good planning'},
//             { message: 'The harder the battle, the sweeter the victory.'},
//             { message: 'Make each day your masterpiece.'},
//             { message: 'You are never too old to set another goal or dream a new dream.'},
//             { message: 'It makes a big difference in your life when you stay positive.'},
//             { message: 'Happiness is not a station you arrive at, but a manner of traveling.'},
//             { message: 'It always seems impossible until it is done.'},
//             { message: 'The only way to have a friend is to be one.'},
//             { message: 'Once you make a decision the universe conspires to make it happen.'},
//             { message: 'You must expect great things of yourself before you can do them.'},
//             { message: 'The road to success is always under construction.'},
//             { message: 'Do something today that your future will thank you for.'},
//             { message: 'Go confidently in the direction of your dreams.'},
//             { message: 'You need to believe you will become the one that you want to become.'},
//             { message: 'Enjoy living life to the fullest.'},
//             { message: 'Have confidence and love yourself.'},
//             { message: 'Effort makes you.\n Do not think it is too late but keep working on it.\n It takes time, but there is nothing that gets worse due to practicing. \nSo practice.'},
//             { message: 'Your presence can give happiness.'},
//             { message: 'Those who keep trying without giving up are the ones who succeed.'},
//             { message: 'When things get tough, \nlook at the people who love you! \nYou will get energy from them.'},
//             { message: 'Good fortune is round the corner.'},
//             { message: 'Happiest people are prettiest people'},
//             { message: 'True happiness lies in sharing with others'},
//             { message: 'Your Smile can change the world'},
//             { message: 'Our loved ones never leave us \nThey are always with us'},
//             { message: 'You are beautiful the way you are'},
//             { message: 'Believe in happy endings'},
//             { message: 'If you can dream it, you can do it.'},
//             { message: 'A year from now you may wish you had started today'},
//             { message: 'Do not be afraid to start all over again. \nWho knows? you may like your new story better'},
//             { message: 'You can You will'},
//             { message: 'The climb might be tough and challenging, but the view is worth it'},
//             { message: 'If you never try, you never know'},
//             { message: 'Believe in miracles'},
//             { message: 'Learn to rest not to quit'},
//             { message: 'You attract the energy that you give off. \nSpread good vibes. Enjoy life'},
//             { message: 'Good luck! \nSeize the day and give it everything you have got'},
//             { message: 'You have worked so hard to get to this moment. \nSoak it all in and enjoy. \nBest of luck for what lies ahead!'},
//             { message: 'Doors will be opening for you in many areas of your life'},
//             { message: 'Your dearest wish will come true'},
//             { message: 'You will find good fortune in love'},
//             { message: 'He who seeks will find'},
//             { message: 'Get up, dress up, show up ohhh lalahh'},
//             { message: 'Your life will be filled with magical moments'},
//             { message: 'Many admire you'},
//             { message: 'Your life will be happy and peaceful'},
//             { message: 'Happy news is on its way'},
//             { message: 'Dance as if no one is watching'},
//             { message: 'Love lights up the world'},
//             { message: 'Your talent will be recognized and suitably rewarded'},
//             { message: 'Believe in yourself and others will too'}
//         ];

//         Message.insertMany(messages);

//         res.status(200).json({'message':'success'});
    
//     } catch (error) {
//         res.status(401);
//         throw new Error('Sorry, something went wrong');
//     }
// });


export { getMessage };