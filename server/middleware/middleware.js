import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const middleware = async (req, res, next) => {
    try {
        // Check if Authorization header is missing
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No Token Provided' });
        }

        const token = req.headers.authorization.split(" ")[1];
        console.log("Received Token:", token); // Debugging step

        // Verify JWT token
        const decoded = jwt.verify(token, "secretofnoteapp123@#");
        if (!decoded || !decoded.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized: Invalid Token' });
        }

        // Fetch user from database
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User Not Found' });
        }

        req.user = { name: user.name, id: user._id };
        next();
    } catch (error) {
        console.error("JWT Error:", error.message);
        return res.status(500).json({ success: false, message: 'Authentication Failed. Please Login.' });
    }
};

export default middleware;
