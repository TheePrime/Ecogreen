import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    squads: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Squad',
      },
    ],
    image: {
      type: [String],
      default: [],
    },
    saves: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    balance: {
      type: Number,
      default: 0,
    },
    donations: {
      type: Number,
      default: 0,
    },
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    connectionRequests: [
      {
        from: { type: Schema.Types.ObjectId, ref: 'User' },
        status: {
          type: String,
          enum: ['pending', 'approved'],
          default: 'pending',
        },
      },
    ],
    cart: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
      },
    ],
    feed: {
      excluded: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Post',
        },
      ],
      fyp: [
        {
          type: String, // post categories
        },
      ],
    },
    purchases: {
      type: Number,
      default: 0,
    },
    promoCode: {
      type: String,
      default: null,
    },
    totalPointsSpent: {
      type: Number,
      default: 0,
    },
    subscriptions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subscription',
      },
    ],
    //token:string, expires: timestamp -> default time 5 mins
    resetDetails: {
      token: String,
      expires: Date,
    },
    //2FA
    authDetails: {
      token: String,
      expires: Date,
    },
    //emailVerified:boolean
    emailVerified: {
      type: Boolean,
      default: false,
    },
    //refferal
    refferal: {
      totalEarned: { type: Number, default: 0 },
      awardEarned: { type: String, default: '' },
      code: {
        type: String,
        unique: true,
      },
      refferedUsers: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    contact: {
      type: String,
      required: true, // for phone calls
      unique: true,
    },
    location: {
      type: {
        type: String, // Defines the GeoJSON type, which must be 'Point'
        enum: ['Point'],
        default: 'Point', // Restricts the type to 'Point' only
      },
      coordinates: {
        type: [Number], // Array of numbers: [longitude, latitude
      },
    },
    productCredits: [
      {
        amount: { type: Number },
        date: { type: Date, default: Date.now },
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        description: { type: String },
      },
    ],
    leaderboardScore: {
      type: Number,
      default: 0,
    },
    donationCredits: [
      {
        amount: { type: Number },
        date: { type: Date, default: Date.now },
        productId: { type: Schema.Types.ObjectId, ref: 'Donation' },
        description: { type: String },
      },
    ],
    totalPointsDonated: {
      type: Number,
      default: 0,
    },
    donationTierEntries: {
      Bronze: { type: Number, default: 0 },
      Silver: { type: Number, default: 0 },
      Titanium: { type: Number, default: 0 },
      Gold: { type: Number, default: 0 },
      Platinum: { type: Number, default: 0 },
      Diamond: { type: Number, default: 0 },
    },
    purchaseTierEntries: {
      Sprout: { type: Number, default: 0 },
      Blossom: { type: Number, default: 0 },
      Canopy: { type: Number, default: 0 },
      Ecosystem: { type: Number, default: 0 },
      Champion: { type: Number, default: 0 },
    },
    activitiesValue: {
      wasteCleaning: { type: Number, default: 0 },
      treePlanting: { type: Number, default: 0 },
      recycling: { type: Number, default: 0 },
    },
    notifications: {
      type: [Schema.Types.ObjectId],
      ref: 'Notification',
      default: [],
    },
  },
  { timestamps: true },
)

const User = model('User', UserSchema)

export default User
