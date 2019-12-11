export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    AWSURL: any;
    AWSTimestamp: any;
    AWSEmail: any;
    AWSPhone: any;
    AWSJSON: any;
};
export declare type Appointment = {
    __typename?: 'Appointment';
    id: Scalars['ID'];
    doctor: Doctor;
    patient: User;
    doctorId: Scalars['ID'];
    patientId: Scalars['ID'];
    createdAt: Scalars['AWSTimestamp'];
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    status: AppointmentStatus;
    date: Scalars['AWSTimestamp'];
};
export declare type AppointmentConnection = {
    __typename?: 'AppointmentConnection';
    items?: Maybe<Array<Maybe<Appointment>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare enum AppointmentStatus {
    Pending = "pending",
    Confirmed = "confirmed",
    Cancelled = "cancelled"
}
export declare type Conversation = {
    __typename?: 'Conversation';
    id: Scalars['ID'];
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    patient: User;
    doctor: Doctor;
    patientId: Scalars['ID'];
    doctorId: Scalars['ID'];
    didDoctorRead?: Maybe<Scalars['Boolean']>;
    didPatientRead?: Maybe<Scalars['Boolean']>;
    messages?: Maybe<MessageConnection>;
};
export declare type ConversationMessagesArgs = {
    filter?: Maybe<TableMessageFilterInput>;
    sortDirection?: Maybe<SortDirection>;
    startFromTime?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type ConversationConnection = {
    __typename?: 'ConversationConnection';
    items?: Maybe<Array<Maybe<Conversation>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare enum County {
    Atlantic = "Atlantic",
    Bergen = "Bergen",
    Burlington = "Burlington",
    Camden = "Camden",
    Capemay = "Capemay",
    Cumberland = "Cumberland",
    Essex = "Essex",
    Gloucester = "Gloucester",
    Hudson = "Hudson",
    Hunterdon = "Hunterdon",
    Mercer = "Mercer",
    Middlesex = "Middlesex",
    Monmouth = "Monmouth",
    Morris = "Morris",
    Ocean = "Ocean",
    Passaic = "Passaic",
    Salem = "Salem",
    Somerset = "Somerset",
    Sussex = "Sussex",
    Union = "Union",
    Warren = "Warren"
}
export declare type CreateAppointmentInput = {
    doctor: Scalars['AWSJSON'];
    patient: Scalars['AWSJSON'];
    createdAt: Scalars['AWSTimestamp'];
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    status: AppointmentStatus;
    date?: Maybe<Scalars['AWSTimestamp']>;
    doctorId: Scalars['ID'];
    patientId: Scalars['ID'];
};
export declare type CreateConversationInput = {
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    patientId: Scalars['ID'];
    doctorId: Scalars['ID'];
    patient: Scalars['AWSJSON'];
    doctor: Scalars['AWSJSON'];
    didDoctorRead?: Maybe<Scalars['Boolean']>;
    didPatientRead?: Maybe<Scalars['Boolean']>;
};
export declare type CreateDoctorInput = {
    id: Scalars['String'];
    address: Scalars['String'];
    county: Scalars['String'];
    hours?: Maybe<Scalars['AWSJSON']>;
    latitude: Scalars['String'];
    longitude: Scalars['String'];
    metadata: Scalars['String'];
    name: Scalars['String'];
    newPatients: Scalars['Boolean'];
    phone?: Maybe<Scalars['String']>;
    specialty: Scalars['String'];
    receiveChats?: Maybe<Scalars['Boolean']>;
    pricePerVisit?: Maybe<Scalars['String']>;
    bio?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['AWSURL']>;
    firstVisit?: Maybe<Scalars['String']>;
    followUp?: Maybe<Scalars['String']>;
    renewal?: Maybe<Scalars['String']>;
    bookingFee?: Maybe<Scalars['String']>;
    visitLength?: Maybe<Scalars['String']>;
    insuranceAccpeted?: Maybe<Scalars['Boolean']>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare type CreateInventoryItemInput = {
    storeId: Scalars['ID'];
    metadata: Scalars['String'];
    product: Scalars['String'];
    options?: Maybe<Scalars['AWSJSON']>;
    quantity?: Maybe<Scalars['Float']>;
    productType: ProductType;
    thc?: Maybe<Scalars['String']>;
    cbd?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['AWSURL']>;
    description?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    strainType?: Maybe<StrainType>;
    brand?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    isCannabisProduct?: Maybe<Scalars['Boolean']>;
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    location?: Maybe<Scalars['AWSJSON']>;
};
export declare type CreateMessageInput = {
    conversationId: Scalars['ID'];
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    sender?: Maybe<Scalars['String']>;
    isSent?: Maybe<Scalars['Boolean']>;
    text: Scalars['String'];
    patientId: Scalars['ID'];
    doctorId: Scalars['ID'];
};
export declare type CreateOrderInput = {
    store: Scalars['AWSJSON'];
    customer: Scalars['AWSJSON'];
    total: Scalars['Float'];
    expectedCompletionDate: Scalars['AWSTimestamp'];
    createdAt: Scalars['AWSTimestamp'];
    status: OrderStatus;
    products: Scalars['AWSJSON'];
    storeId: Scalars['ID'];
    customerId: Scalars['ID'];
    discount?: Maybe<Scalars['Float']>;
    subtotal: Scalars['Float'];
    code: Scalars['String'];
    tax?: Maybe<Scalars['Float']>;
    discountDisplayValue?: Maybe<Scalars['String']>;
    subtotalDisplayValue?: Maybe<Scalars['String']>;
    taxDisplayValue?: Maybe<Scalars['String']>;
    totalDisplayValue?: Maybe<Scalars['String']>;
    delivery?: Maybe<Scalars['Boolean']>;
    pickup: Scalars['Boolean'];
    pos?: Maybe<Scalars['Boolean']>;
    driver?: Maybe<Scalars['String']>;
};
export declare type CreateProductInput = {
    name: Scalars['String'];
    slug: Scalars['String'];
};
export declare type CreateStoreInput = {
    companyId: Scalars['ID'];
    hours?: Maybe<Scalars['AWSJSON']>;
    name: Scalars['String'];
    phone?: Maybe<Scalars['AWSPhone']>;
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
    state: State;
    city: Scalars['String'];
    slug: Scalars['String'];
    link?: Maybe<Scalars['AWSURL']>;
    street: Scalars['String'];
    zip: Scalars['String'];
    logo?: Maybe<Scalars['AWSURL']>;
    storefrontImage?: Maybe<Scalars['AWSURL']>;
    pickup?: Maybe<Scalars['Boolean']>;
    delivery?: Maybe<Scalars['Boolean']>;
    maxDays?: Maybe<Scalars['Int']>;
    drivers?: Maybe<Scalars['AWSJSON']>;
    public?: Maybe<Scalars['Boolean']>;
    metadata: Scalars['String'];
};
export declare type CreateUserInput = {
    id: Scalars['ID'];
    confirmed?: Maybe<Scalars['Boolean']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    patientID?: Maybe<Scalars['String']>;
    expiration?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['AWSEmail']>;
    phone?: Maybe<Scalars['AWSPhone']>;
    dob?: Maybe<Scalars['String']>;
    issued?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    state?: Maybe<State>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare enum Day {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
export declare type DeleteInventoryItemInput = {
    storeId: Scalars['ID'];
    id: Scalars['ID'];
};
export declare type DeleteProductInput = {
    id: Scalars['ID'];
    slug: Scalars['String'];
};
export declare type DeleteStoreInput = {
    companyId: Scalars['ID'];
    id: Scalars['ID'];
};
export declare type Doctor = {
    __typename?: 'Doctor';
    id: Scalars['ID'];
    address: Scalars['String'];
    county: County;
    metadata: Scalars['String'];
    hours?: Maybe<Array<Maybe<Scalars['String']>>>;
    latitude: Scalars['String'];
    longitude: Scalars['String'];
    name: Scalars['String'];
    newPatients?: Maybe<Scalars['Boolean']>;
    phone?: Maybe<Scalars['String']>;
    specialty: Scalars['String'];
    receiveChats?: Maybe<Scalars['Boolean']>;
    bio?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['AWSURL']>;
    insuranceAccpeted?: Maybe<Scalars['Boolean']>;
    firstVisit?: Maybe<Scalars['String']>;
    followUp?: Maybe<Scalars['String']>;
    renewal?: Maybe<Scalars['String']>;
    bookingFee?: Maybe<Scalars['String']>;
    visitLength?: Maybe<Scalars['String']>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare type DoctorConnection = {
    __typename?: 'DoctorConnection';
    items?: Maybe<Array<Maybe<Doctor>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type Geolocation = {
    __typename?: 'Geolocation';
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
};
export declare type InventoryItem = {
    __typename?: 'InventoryItem';
    storeId: Scalars['ID'];
    id: Scalars['ID'];
    metadata: Scalars['String'];
    product: Product;
    productType: ProductType;
    image?: Maybe<Scalars['AWSURL']>;
    quantity?: Maybe<Scalars['Float']>;
    thc?: Maybe<Scalars['String']>;
    cbd?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    strainType?: Maybe<StrainType>;
    brand?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    options?: Maybe<Array<Maybe<Option>>>;
    isCannabisProduct?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Geolocation>;
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type InventoryItemConnection = {
    __typename?: 'InventoryItemConnection';
    items?: Maybe<Array<Maybe<InventoryItem>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type Message = {
    __typename?: 'Message';
    id: Scalars['ID'];
    text: Scalars['String'];
    conversationId: Scalars['ID'];
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    isSent?: Maybe<Scalars['Boolean']>;
    sender?: Maybe<Scalars['String']>;
};
export declare type MessageConnection = {
    __typename?: 'MessageConnection';
    items?: Maybe<Array<Maybe<Message>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    createProduct?: Maybe<Product>;
    createStore?: Maybe<Store>;
    updateStore?: Maybe<Store>;
    deleteStore?: Maybe<Store>;
    createInventoryItem?: Maybe<InventoryItem>;
    updateInventoryItem?: Maybe<InventoryItem>;
    deleteInventoryItem?: Maybe<InventoryItem>;
    updateOrder?: Maybe<Order>;
    createOrder?: Maybe<Order>;
    updateStock?: Maybe<InventoryItem>;
    createDoctor?: Maybe<Doctor>;
    updateDoctor?: Maybe<Doctor>;
    createUser?: Maybe<User>;
    updateUser?: Maybe<User>;
    createAppointment?: Maybe<Appointment>;
    updateAppointment?: Maybe<Appointment>;
    createMessage?: Maybe<Message>;
    createConversation?: Maybe<Conversation>;
    updateConversation?: Maybe<Conversation>;
};
export declare type MutationCreateProductArgs = {
    input: CreateProductInput;
};
export declare type MutationCreateStoreArgs = {
    input: CreateStoreInput;
};
export declare type MutationUpdateStoreArgs = {
    input: UpdateStoreInput;
};
export declare type MutationDeleteStoreArgs = {
    input?: Maybe<DeleteStoreInput>;
};
export declare type MutationCreateInventoryItemArgs = {
    input: CreateInventoryItemInput;
};
export declare type MutationUpdateInventoryItemArgs = {
    input: UpdateInventoryItemInput;
};
export declare type MutationDeleteInventoryItemArgs = {
    input: DeleteInventoryItemInput;
};
export declare type MutationUpdateOrderArgs = {
    input?: Maybe<UpdateOrderInput>;
};
export declare type MutationCreateOrderArgs = {
    input?: Maybe<CreateOrderInput>;
};
export declare type MutationUpdateStockArgs = {
    input: UpdateStockInput;
};
export declare type MutationCreateDoctorArgs = {
    input: CreateDoctorInput;
};
export declare type MutationUpdateDoctorArgs = {
    input: UpdateDoctorInput;
};
export declare type MutationCreateUserArgs = {
    input: CreateUserInput;
};
export declare type MutationUpdateUserArgs = {
    input: UpdateUserInput;
};
export declare type MutationCreateAppointmentArgs = {
    input?: Maybe<CreateAppointmentInput>;
};
export declare type MutationUpdateAppointmentArgs = {
    input?: Maybe<UpdateAppointmentInput>;
};
export declare type MutationCreateMessageArgs = {
    input?: Maybe<CreateMessageInput>;
};
export declare type MutationCreateConversationArgs = {
    input?: Maybe<CreateConversationInput>;
};
export declare type MutationUpdateConversationArgs = {
    input?: Maybe<UpdateConversationInput>;
};
export declare type Option = {
    __typename?: 'Option';
    amount?: Maybe<Scalars['Float']>;
    weight?: Maybe<WeightOptions>;
};
export declare type Order = {
    __typename?: 'Order';
    id: Scalars['ID'];
    store: Store;
    customer: User;
    expectedCompletionDate: Scalars['AWSTimestamp'];
    createdAt: Scalars['AWSTimestamp'];
    status: OrderStatus;
    products: Array<Maybe<OrderItem>>;
    storeId: Scalars['ID'];
    customerId: Scalars['ID'];
    discount?: Maybe<Scalars['Float']>;
    subtotal: Scalars['Float'];
    total: Scalars['Float'];
    tax?: Maybe<Scalars['Float']>;
    discountDisplayValue?: Maybe<Scalars['String']>;
    subtotalDisplayValue: Scalars['String'];
    taxDisplayValue?: Maybe<Scalars['String']>;
    totalDisplayValue: Scalars['String'];
    delivery?: Maybe<Scalars['Boolean']>;
    pickup: Scalars['Boolean'];
    pos?: Maybe<Scalars['Boolean']>;
    code: Scalars['String'];
};
export declare type OrderConnection = {
    __typename?: 'OrderConnection';
    items?: Maybe<Array<Maybe<Order>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type OrderItem = {
    __typename?: 'OrderItem';
    item: InventoryItem;
    quantity: Scalars['Int'];
    option: Option;
    requestedGrams: Scalars['Int'];
};
export declare enum OrderStatus {
    New = "new",
    Accepted = "accepted",
    Rejected = "rejected"
}
export declare type Product = {
    __typename?: 'Product';
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
};
export declare type ProductConnection = {
    __typename?: 'ProductConnection';
    items?: Maybe<Array<Maybe<Product>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare enum ProductType {
    Flower = "Flower",
    Concentrate = "Concentrate",
    Edible = "Edible",
    Topical = "Topical",
    PreRolls = "PreRolls"
}
export declare type Query = {
    __typename?: 'Query';
    getProduct?: Maybe<Product>;
    getStore?: Maybe<Store>;
    getCompanyStores?: Maybe<StoreConnection>;
    getStoreInventory?: Maybe<InventoryItemConnection>;
    getOrdersByStore?: Maybe<OrderConnection>;
    getDoctor?: Maybe<Doctor>;
    getUser?: Maybe<User>;
    listStores?: Maybe<StoreConnection>;
    getOrdersByCustomer?: Maybe<OrderConnection>;
    getStoreByMetadata?: Maybe<Store>;
    getStoreInventoryWithFilters?: Maybe<InventoryItemConnection>;
    validateCart?: Maybe<Array<Maybe<InventoryItem>>>;
    listDoctors?: Maybe<DoctorConnection>;
    getDoctorsByCounty?: Maybe<DoctorConnection>;
    getAppointment?: Maybe<Appointment>;
    getAppointmentsByPatient?: Maybe<AppointmentConnection>;
    getAppointmentsByDoctor?: Maybe<AppointmentConnection>;
    getConversation?: Maybe<Conversation>;
    getConversationsByDoctor?: Maybe<ConversationConnection>;
    getConversationsByPatient?: Maybe<ConversationConnection>;
    getMessagesFromAConversation?: Maybe<MessageConnection>;
};
export declare type QueryGetProductArgs = {
    slug: Scalars['String'];
};
export declare type QueryGetStoreArgs = {
    id: Scalars['ID'];
    companyId: Scalars['ID'];
};
export declare type QueryGetCompanyStoresArgs = {
    companyId: Scalars['ID'];
};
export declare type QueryGetStoreInventoryArgs = {
    storeId: Scalars['ID'];
    nextToken?: Maybe<Scalars['String']>;
    filter?: Maybe<TableInventoryItemFilterInput>;
};
export declare type QueryGetOrdersByStoreArgs = {
    storeId: Scalars['ID'];
};
export declare type QueryGetDoctorArgs = {
    id: Scalars['ID'];
};
export declare type QueryGetUserArgs = {
    id: Scalars['ID'];
};
export declare type QueryListStoresArgs = {
    filter?: Maybe<TableStoreFilterInput>;
    limit?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type QueryGetOrdersByCustomerArgs = {
    customerId: Scalars['ID'];
};
export declare type QueryGetStoreByMetadataArgs = {
    metadata: Scalars['String'];
};
export declare type QueryGetStoreInventoryWithFiltersArgs = {
    storeId: Scalars['ID'];
    metadata?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    filter?: Maybe<TableInventoryItemFilterInput>;
};
export declare type QueryValidateCartArgs = {
    cart: Scalars['AWSJSON'];
    storeId: Scalars['ID'];
};
export declare type QueryListDoctorsArgs = {
    filter?: Maybe<TableDoctorFilterInput>;
    limit?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type QueryGetDoctorsByCountyArgs = {
    metadata: Scalars['String'];
    nextToken?: Maybe<Scalars['String']>;
};
export declare type QueryGetAppointmentArgs = {
    id: Scalars['ID'];
};
export declare type QueryGetAppointmentsByPatientArgs = {
    patientId: Scalars['ID'];
    filter?: Maybe<TableAppointmentFilterInput>;
};
export declare type QueryGetAppointmentsByDoctorArgs = {
    doctorId: Scalars['ID'];
    from: Scalars['AWSTimestamp'];
    to: Scalars['AWSTimestamp'];
    filter?: Maybe<TableAppointmentFilterInput>;
};
export declare type QueryGetConversationArgs = {
    id: Scalars['ID'];
    filter?: Maybe<TableConversationFilterInput>;
};
export declare type QueryGetConversationsByDoctorArgs = {
    doctorId: Scalars['ID'];
    filter?: Maybe<TableConversationFilterInput>;
};
export declare type QueryGetConversationsByPatientArgs = {
    patientId: Scalars['ID'];
    filter?: Maybe<TableConversationFilterInput>;
};
export declare type QueryGetMessagesFromAConversationArgs = {
    conversationId: Scalars['ID'];
    filter?: Maybe<TableMessageFilterInput>;
    sortDirection?: Maybe<SortDirection>;
    startFromTime?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type ReviewProductInput = {
    id: Scalars['ID'];
};
export declare enum SortDirection {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum State {
    Nj = "NJ"
}
export declare type Store = {
    __typename?: 'Store';
    id: Scalars['ID'];
    companyId: Scalars['ID'];
    hours?: Maybe<Array<Maybe<Timeblock>>>;
    inventory?: Maybe<InventoryItemConnection>;
    name: Scalars['String'];
    phone?: Maybe<Scalars['String']>;
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
    state: State;
    city: Scalars['String'];
    link?: Maybe<Scalars['AWSURL']>;
    street: Scalars['String'];
    zip: Scalars['String'];
    logo?: Maybe<Scalars['AWSURL']>;
    storefrontImage?: Maybe<Scalars['AWSURL']>;
    pickup?: Maybe<Scalars['Boolean']>;
    delivery?: Maybe<Scalars['Boolean']>;
    maxDays?: Maybe<Scalars['Int']>;
    drivers?: Maybe<StoreDrivers>;
    public?: Maybe<Scalars['Boolean']>;
    slug: Scalars['String'];
    metadata: Scalars['String'];
};
export declare type StoreConnection = {
    __typename?: 'StoreConnection';
    items?: Maybe<Array<Maybe<Store>>>;
    nextToken?: Maybe<Scalars['String']>;
};
export declare type StoreDrivers = {
    __typename?: 'StoreDrivers';
    id?: Maybe<Scalars['ID']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
};
export declare enum StrainType {
    Cbd = "CBD",
    Highcbd = "HIGHCBD",
    Hybrid = "Hybrid",
    Indica = "Indica",
    Sativa = "Sativa"
}
export declare type Subscription = {
    __typename?: 'Subscription';
    onCreateOrder?: Maybe<Order>;
    onUpdateInventoryItemStock?: Maybe<InventoryItem>;
    onUpdateConversation?: Maybe<Conversation>;
    onCreateMessage?: Maybe<Message>;
};
export declare type SubscriptionOnCreateOrderArgs = {
    storeId: Scalars['ID'];
    status?: Maybe<OrderStatus>;
};
export declare type SubscriptionOnUpdateInventoryItemStockArgs = {
    id: Scalars['ID'];
};
export declare type SubscriptionOnUpdateConversationArgs = {
    patientId?: Maybe<Scalars['ID']>;
    doctorId?: Maybe<Scalars['ID']>;
};
export declare type SubscriptionOnCreateMessageArgs = {
    conversationId?: Maybe<Scalars['ID']>;
};
export declare type TableAppointmentFilterInput = {
    doctor?: Maybe<TableStringFilterInput>;
    patient?: Maybe<TableStringFilterInput>;
    status?: Maybe<TableStringFilterInput>;
    date?: Maybe<TableIntFilterInput>;
    doctorId?: Maybe<TableStringFilterInput>;
    patientID?: Maybe<TableStringFilterInput>;
};
export declare type TableBooleanFilterInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
};
export declare type TableConversationFilterInput = {
    id?: Maybe<TableIdFilterInput>;
    doctorId?: Maybe<TableIdFilterInput>;
    patientId?: Maybe<TableIdFilterInput>;
};
export declare type TableDoctorFilterInput = {
    address?: Maybe<TableStringFilterInput>;
    hours?: Maybe<TableStringFilterInput>;
    name?: Maybe<TableStringFilterInput>;
    newPatients?: Maybe<TableBooleanFilterInput>;
    county?: Maybe<TableStringFilterInput>;
};
export declare type TableFloatFilterInput = {
    between?: Maybe<Array<Maybe<Scalars['Float']>>>;
    contains?: Maybe<Scalars['Float']>;
    eq?: Maybe<Scalars['Float']>;
    ge?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    le?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    notContains?: Maybe<Scalars['Float']>;
};
export declare type TableIdFilterInput = {
    beginsWith?: Maybe<Scalars['ID']>;
    between?: Maybe<Array<Maybe<Scalars['ID']>>>;
    contains?: Maybe<Scalars['ID']>;
    eq?: Maybe<Scalars['ID']>;
    ge?: Maybe<Scalars['ID']>;
    gt?: Maybe<Scalars['ID']>;
    le?: Maybe<Scalars['ID']>;
    lt?: Maybe<Scalars['ID']>;
    ne?: Maybe<Scalars['ID']>;
    notContains?: Maybe<Scalars['ID']>;
};
export declare type TableIntFilterInput = {
    between?: Maybe<Array<Maybe<Scalars['Int']>>>;
    contains?: Maybe<Scalars['Int']>;
    eq?: Maybe<Scalars['Int']>;
    ge?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    le?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    notContains?: Maybe<Scalars['Int']>;
};
export declare type TableInventoryItemFilterInput = {
    id?: Maybe<TableIdFilterInput>;
    product?: Maybe<TableStringFilterInput>;
    quantity?: Maybe<TableFloatFilterInput>;
    productType?: Maybe<TableStringFilterInput>;
    isCannabisProduct?: Maybe<TableBooleanFilterInput>;
};
export declare type TableMessageFilterInput = {
    conversationId?: Maybe<TableIdFilterInput>;
    createdAt?: Maybe<TableIntFilterInput>;
    sender?: Maybe<TableStringFilterInput>;
    isSent?: Maybe<TableBooleanFilterInput>;
    text?: Maybe<TableStringFilterInput>;
};
export declare type TableOrderFilterInput = {
    id?: Maybe<TableIdFilterInput>;
    date?: Maybe<TableStringFilterInput>;
    status?: Maybe<TableStringFilterInput>;
    products?: Maybe<TableStringFilterInput>;
    customer?: Maybe<TableStringFilterInput>;
    store?: Maybe<TableStringFilterInput>;
    delivery?: Maybe<TableBooleanFilterInput>;
    code?: Maybe<TableStringFilterInput>;
};
export declare type TableProductFilterInput = {
    description?: Maybe<TableStringFilterInput>;
    id?: Maybe<TableIdFilterInput>;
    name?: Maybe<TableStringFilterInput>;
    slug?: Maybe<TableStringFilterInput>;
};
export declare type TableStoreFilterInput = {
    city?: Maybe<TableStringFilterInput>;
    id?: Maybe<TableIdFilterInput>;
    inventory?: Maybe<TableStringFilterInput>;
    name?: Maybe<TableStringFilterInput>;
    zip?: Maybe<TableStringFilterInput>;
    pickup?: Maybe<TableBooleanFilterInput>;
    delivery?: Maybe<TableBooleanFilterInput>;
    public?: Maybe<TableBooleanFilterInput>;
};
export declare type TableStringFilterInput = {
    beginsWith?: Maybe<Scalars['String']>;
    between?: Maybe<Array<Maybe<Scalars['String']>>>;
    contains?: Maybe<Scalars['String']>;
    eq?: Maybe<Scalars['String']>;
    ge?: Maybe<Scalars['String']>;
    gt?: Maybe<Scalars['String']>;
    le?: Maybe<Scalars['String']>;
    lt?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    notContains?: Maybe<Scalars['String']>;
};
export declare type Timeblock = {
    __typename?: 'timeblock';
    day?: Maybe<Day>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
};
export declare type UpdateAppointmentInput = {
    id: Scalars['ID'];
    status?: Maybe<AppointmentStatus>;
};
export declare type UpdateConversationInput = {
    id: Scalars['ID'];
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    didDoctorRead?: Maybe<Scalars['Boolean']>;
    didPatientRead?: Maybe<Scalars['Boolean']>;
};
export declare type UpdateDoctorInput = {
    id: Scalars['ID'];
    address?: Maybe<Scalars['String']>;
    hours?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    receiveChats?: Maybe<Scalars['Boolean']>;
    bio?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['AWSURL']>;
    firstVisit?: Maybe<Scalars['String']>;
    followUp?: Maybe<Scalars['String']>;
    renewal?: Maybe<Scalars['String']>;
    bookingFee?: Maybe<Scalars['String']>;
    visitLength?: Maybe<Scalars['String']>;
    insuranceAccpeted?: Maybe<Scalars['Boolean']>;
    metadata?: Maybe<Scalars['String']>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare type UpdateInventoryItemInput = {
    id: Scalars['ID'];
    storeId: Scalars['ID'];
    thc?: Maybe<Scalars['String']>;
    cbd?: Maybe<Scalars['String']>;
    options?: Maybe<Scalars['AWSJSON']>;
    productType?: Maybe<ProductType>;
    quantity?: Maybe<Scalars['Float']>;
    product?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['AWSURL']>;
    description?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    strainType?: Maybe<StrainType>;
    brand?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    isCannabisProduct?: Maybe<Scalars['Boolean']>;
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['AWSTimestamp']>;
    location?: Maybe<Scalars['AWSJSON']>;
};
export declare type UpdateOrderInput = {
    id?: Maybe<Scalars['ID']>;
    createdAt: Scalars['AWSTimestamp'];
    status?: Maybe<OrderStatus>;
    customerId: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
};
export declare type UpdateProductInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    slug: Scalars['String'];
};
export declare type UpdateStockInput = {
    storeId: Scalars['ID'];
    id: Scalars['ID'];
    quantity?: Maybe<Scalars['Float']>;
};
export declare type UpdateStoreInput = {
    companyId: Scalars['ID'];
    id: Scalars['ID'];
    address?: Maybe<Scalars['String']>;
    hours?: Maybe<Scalars['AWSJSON']>;
    name?: Maybe<Scalars['String']>;
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    state?: Maybe<State>;
    city?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['AWSURL']>;
    zip?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['AWSPhone']>;
    logo?: Maybe<Scalars['AWSURL']>;
    storefrontImage?: Maybe<Scalars['AWSURL']>;
    pickup?: Maybe<Scalars['Boolean']>;
    delivery?: Maybe<Scalars['Boolean']>;
    maxDays?: Maybe<Scalars['Int']>;
    drivers?: Maybe<Scalars['AWSJSON']>;
    public?: Maybe<Scalars['Boolean']>;
    metadata?: Maybe<Scalars['String']>;
};
export declare type UpdateUserInput = {
    id: Scalars['ID'];
    confirmed?: Maybe<Scalars['Boolean']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    patientID?: Maybe<Scalars['String']>;
    expiration?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['AWSEmail']>;
    phone?: Maybe<Scalars['AWSPhone']>;
    dob?: Maybe<Scalars['String']>;
    issued?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    state?: Maybe<State>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    confirmed?: Maybe<Scalars['Boolean']>;
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    state?: Maybe<State>;
    patientID?: Maybe<Scalars['String']>;
    expiration?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['AWSEmail']>;
    phone?: Maybe<Scalars['AWSPhone']>;
    marketToken?: Maybe<Scalars['String']>;
    medToken?: Maybe<Scalars['String']>;
    stateId?: Maybe<Scalars['String']>;
    medCard?: Maybe<Scalars['String']>;
    marketWebToken?: Maybe<Scalars['String']>;
};
export declare enum WeightOptions {
    Gram = "gram",
    Eighth = "eighth",
    Quarter = "quarter",
    Half = "half",
    Ounce = "ounce"
}
