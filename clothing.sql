USE [master]
GO
/****** Object:  Database [Clothing]    Script Date: 10/10/2021 10:49:50 PM ******/
CREATE DATABASE [Clothing]
GO
ALTER DATABASE [Clothing] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Clothing].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Clothing] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Clothing] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Clothing] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Clothing] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Clothing] SET ARITHABORT OFF 
GO
ALTER DATABASE [Clothing] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Clothing] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Clothing] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Clothing] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Clothing] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Clothing] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Clothing] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Clothing] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Clothing] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Clothing] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Clothing] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Clothing] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Clothing] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Clothing] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Clothing] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Clothing] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Clothing] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Clothing] SET RECOVERY FULL 
GO
ALTER DATABASE [Clothing] SET  MULTI_USER 
GO
ALTER DATABASE [Clothing] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Clothing] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Clothing] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Clothing] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Clothing] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Clothing] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Clothing', N'ON'
GO
ALTER DATABASE [Clothing] SET QUERY_STORE = OFF
GO
USE [Clothing]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 10/10/2021 10:49:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[email] [nvarchar](200) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[createDate] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartItem]    Script Date: 10/10/2021 10:49:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartItem](
	[email] [nvarchar](200) NOT NULL,
	[itemId] [int] NOT NULL,
	[quantity] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC,
	[itemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Collection]    Script Date: 10/10/2021 10:49:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collection](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](100) NOT NULL,
	[imageUrl] [nvarchar](2000) NOT NULL,
	[linkUrl] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Item]    Script Date: 10/10/2021 10:49:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Item](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[imageUrl] [nvarchar](2000) NOT NULL,
	[price] [float] NOT NULL,
	[collectionId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cart] ([email], [name], [createDate]) VALUES (N't.max347056@gmail.com', N'Nguyen Chanh Thanh', CAST(N'2021-08-25T22:40:03.000' AS DateTime))
INSERT [dbo].[Cart] ([email], [name], [createDate]) VALUES (N'thanhncse130743@fpt.edu.vn', N'Nguyen Chanh Thanh (K13_HCM)', CAST(N'2021-08-25T20:03:50.000' AS DateTime))
INSERT [dbo].[Cart] ([email], [name], [createDate]) VALUES (N'tuyennt@gmail.com', N'Truong Tuyen', CAST(N'2021-08-27T00:12:21.000' AS DateTime))
GO
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N't.max347056@gmail.com', 21, 1)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'thanhncse130743@fpt.edu.vn', 19, 1)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'thanhncse130743@fpt.edu.vn', 20, 3)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'thanhncse130743@fpt.edu.vn', 21, 2)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'tuyennt@gmail.com', 3, 2)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'tuyennt@gmail.com', 20, 1)
INSERT [dbo].[CartItem] ([email], [itemId], [quantity]) VALUES (N'tuyennt@gmail.com', 25, 1)
GO
SET IDENTITY_INSERT [dbo].[Collection] ON 

INSERT [dbo].[Collection] ([id], [title], [imageUrl], [linkUrl]) VALUES (1, N'jackets', N'https://i.ibb.co/px2tCc3/jackets.png', N'shop/jackets')
INSERT [dbo].[Collection] ([id], [title], [imageUrl], [linkUrl]) VALUES (2, N'hats', N'https://i.ibb.co/cvpntL1/hats.png', N'shop/hats')
INSERT [dbo].[Collection] ([id], [title], [imageUrl], [linkUrl]) VALUES (3, N'men', N'https://i.ibb.co/R70vBrQ/men.png', N'shop/men')
INSERT [dbo].[Collection] ([id], [title], [imageUrl], [linkUrl]) VALUES (4, N'sneakers', N'https://i.ibb.co/0jqHpnp/sneakers.png', N'shop/sneakers')
INSERT [dbo].[Collection] ([id], [title], [imageUrl], [linkUrl]) VALUES (5, N'women', N'https://i.ibb.co/GCCdy8t/womens.png', N'shop/women')
SET IDENTITY_INSERT [dbo].[Collection] OFF
GO
SET IDENTITY_INSERT [dbo].[Item] ON 

INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (1, N'Brown Brim', N'https://i.ibb.co/ZYW3VTp/brown-brim.png', 25, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (2, N'Blue Beanie', N'https://i.ibb.co/ypkgK0X/blue-beanie.png', 18, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (3, N'Brown Cowboy', N'https://i.ibb.co/QdJwgmp/brown-cowboy.png', 35, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (4, N'Grey Brim', N'https://i.ibb.co/RjBLWxB/grey-brim.png', 25, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (5, N'Green Beanie', N'https://i.ibb.co/YTjW3vF/green-beanie.png', 18, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (6, N'Palm Tree Cap', N'https://i.ibb.co/rKBDvJX/palm-tree-cap.png', 14, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (7, N'Red Beanie', N'https://i.ibb.co/bLB646Z/red-beanie.png', 18, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (8, N'Wolf Cap', N'https://i.ibb.co/1f2nWMM/wolf-cap.png', 14, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (9, N'Blue Snapback', N'https://i.ibb.co/X2VJP2W/blue-snapback.png', 16, 2)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (10, N'Adidas NMD', N'https://i.ibb.co/0s3pdnc/adidas-nmd.png', 220, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (11, N'Adidas Yeezy', N'https://i.ibb.co/dJbG1cT/yeezy.png', 280, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (12, N'Black Converse', N'https://i.ibb.co/bPmVXyP/black-converse.png', 110, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (13, N'Nike White AirForce', N'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png', 160, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (14, N'Nike Red High Tops', N'https://i.ibb.co/QcvzydB/nikes-red.png', 160, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (15, N'Nike Brown High Tops', N'https://i.ibb.co/fMTV342/nike-brown.png', 160, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (16, N'Air Jordan Limited', N'https://i.ibb.co/w4k6Ws9/nike-funky.png', 190, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (17, N'Timberlands', N'https://i.ibb.co/Mhh6wBg/timberlands.png', 200, 4)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (18, N'Black Jean Shearling', N'https://i.ibb.co/XzcwL5s/black-shearling.png', 125, 1)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (19, N'Blue Jean Jacket', N'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png', 90, 1)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (20, N'Grey Jean Jacket', N'https://i.ibb.co/N71k1ML/grey-jean-jacket.png', 90, 1)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (21, N'Brown Shearling', N'https://i.ibb.co/s96FpdP/brown-shearling.png', 165, 1)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (22, N'Tan Trench', N'https://i.ibb.co/M6hHc3F/brown-trench.png', 185, 1)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (23, N'Blue Tanktop', N'https://i.ibb.co/7CQVJNm/blue-tank.png', 25, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (24, N'Floral Blouse', N'https://i.ibb.co/4W2DGKm/floral-blouse.png', 20, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (25, N'Floral Dress', N'https://i.ibb.co/KV18Ysr/floral-skirt.png', 80, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (26, N'Red Dots Dress', N'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png', 80, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (27, N'Striped Sweater', N'https://i.ibb.co/KmSkMbH/striped-sweater.png', 45, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (28, N'Yellow Track Suit', N'https://i.ibb.co/v1cvwNf/yellow-track-suit.png', 135, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (29, N'White Blouse', N'https://i.ibb.co/qBcrsJg/white-vest.png', 20, 5)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (30, N'Camo Down Vest', N'https://i.ibb.co/xJS0T3Y/camo-vest.png', 325, 3)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (31, N'Floral T-shirt', N'https://i.ibb.co/qMQ75QZ/floral-shirt.png', 20, 3)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (32, N'Black & White Longsleeve', N'https://i.ibb.co/55z32tw/long-sleeve.png', 25, 3)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (33, N'Pink T-shirt', N'https://i.ibb.co/RvwnBL8/pink-shirt.png', 25, 3)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (34, N'Jean Long Sleeve', N'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png', 40, 3)
INSERT [dbo].[Item] ([id], [name], [imageUrl], [price], [collectionId]) VALUES (35, N'Burgundy T-shirt', N'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png', 25, 3)
SET IDENTITY_INSERT [dbo].[Item] OFF
GO
ALTER TABLE [dbo].[CartItem]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Cart] ([email])
GO
ALTER TABLE [dbo].[CartItem]  WITH CHECK ADD FOREIGN KEY([itemId])
REFERENCES [dbo].[Item] ([id])
GO
ALTER TABLE [dbo].[Item]  WITH CHECK ADD FOREIGN KEY([collectionId])
REFERENCES [dbo].[Collection] ([id])
GO
USE [master]
GO
ALTER DATABASE [Clothing] SET  READ_WRITE 
GO
