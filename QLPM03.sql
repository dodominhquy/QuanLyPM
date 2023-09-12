USE [QLPM]
GO
/****** Object:  Table [dbo].[ASSIGNMENT]    Script Date: 12/09/2023 10:27:41 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ASSIGNMENT](
	[IDAssignment] [int] NOT NULL,
	[IDLogin] [int] NOT NULL,
	[DMY] [smalldatetime] NULL,
	[ShiftTime] [varchar](50) NULL,
	[CreatedAt] [smalldatetime] NULL,
	[UpdatedAt] [smalldatetime] NULL,
 CONSTRAINT [PK_ASSIGNMENT_IDAssignment] PRIMARY KEY CLUSTERED 
(
	[IDAssignment] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DEVICE]    Script Date: 12/09/2023 10:27:41 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DEVICE](
	[IDDevice] [nvarchar](5) NOT NULL,
	[IDRoom] [nvarchar](5) NOT NULL,
	[Monitor] [int] NULL,
	[Keyboard] [int] NULL,
	[Mouse] [int] NULL,
	[PCcase] [int] NULL,
	[QuantityOfSoftware] [int] NULL,
	[Status] [nvarchar](30) NULL,
	[Note] [nvarchar](100) NULL,
	[CreatedAt] [smalldatetime] NULL,
	[UpdateAt] [smalldatetime] NULL,
 CONSTRAINT [PK_DEVICE_IDDevice] PRIMARY KEY CLUSTERED 
(
	[IDDevice] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOGIN]    Script Date: 12/09/2023 10:27:41 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOGIN](
	[IDLogin] [int] NOT NULL,
	[Username] [nvarchar](20) NULL,
	[Password] [nvarchar](20) NULL,
	[CreatedAt] [smalldatetime] NULL,
	[UpdateAt] [smalldatetime] NULL,
 CONSTRAINT [PK_LOGIN_ID] PRIMARY KEY CLUSTERED 
(
	[IDLogin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ROOM]    Script Date: 12/09/2023 10:27:41 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ROOM](
	[IDroom] [nvarchar](5) NOT NULL,
	[RoomName] [nvarchar](10) NULL,
	[DeviceQuantity] [int] NULL,
	[IDAssignment] [int] NULL,
	[CreatedAt] [smalldatetime] NULL,
	[UpdateAt] [smalldatetime] NULL,
 CONSTRAINT [PK_ROOM_IDRoom] PRIMARY KEY CLUSTERED 
(
	[IDroom] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[ASSIGNMENT] ([IDAssignment], [IDLogin], [DMY], [ShiftTime], [CreatedAt], [UpdatedAt]) VALUES (1, 12, CAST(N'2023-10-09T00:00:00' AS SmallDateTime), N'7:00-9:00', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[ASSIGNMENT] ([IDAssignment], [IDLogin], [DMY], [ShiftTime], [CreatedAt], [UpdatedAt]) VALUES (2, 34, CAST(N'2023-10-12T00:00:00' AS SmallDateTime), N'7:00-9:00', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[ASSIGNMENT] ([IDAssignment], [IDLogin], [DMY], [ShiftTime], [CreatedAt], [UpdatedAt]) VALUES (3, 56, CAST(N'2023-10-15T00:00:00' AS SmallDateTime), N'7:00-9:00', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
GO
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCA1', N'PC02', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCA2', N'PC02', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCA3', N'PC02', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCA4', N'PC02', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCA5', N'PC02', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCB1', N'PC03', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCB2', N'PC03', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCB3', N'PC03', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCB4', N'PC03', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCB5', N'PC03', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCM1', N'PC01', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCM2', N'PC01', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCM3', N'PC01', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCM4', N'PC01', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[DEVICE] ([IDDevice], [IDRoom], [Monitor], [Keyboard], [Mouse], [PCcase], [QuantityOfSoftware], [Status], [Note], [CreatedAt], [UpdateAt]) VALUES (N'PCM5', N'PC01', 5, 5, 5, 5, 5, N'Active', N' ', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
GO
INSERT [dbo].[LOGIN] ([IDLogin], [Username], [Password], [CreatedAt], [UpdateAt]) VALUES (12, N'hao', N'hao123', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[LOGIN] ([IDLogin], [Username], [Password], [CreatedAt], [UpdateAt]) VALUES (34, N'tu', N'tu123', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[LOGIN] ([IDLogin], [Username], [Password], [CreatedAt], [UpdateAt]) VALUES (56, N'quy', N'quy123', CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
GO
INSERT [dbo].[ROOM] ([IDroom], [RoomName], [DeviceQuantity], [IDAssignment], [CreatedAt], [UpdateAt]) VALUES (N'PC01', N'PH1', 5, 1, CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[ROOM] ([IDroom], [RoomName], [DeviceQuantity], [IDAssignment], [CreatedAt], [UpdateAt]) VALUES (N'PC02', N'PH2', 5, 2, CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
INSERT [dbo].[ROOM] ([IDroom], [RoomName], [DeviceQuantity], [IDAssignment], [CreatedAt], [UpdateAt]) VALUES (N'PC03', N'PH3', 5, 3, CAST(N'2023-09-11T00:00:00' AS SmallDateTime), CAST(N'1900-01-01T00:00:00' AS SmallDateTime))
GO
ALTER TABLE [dbo].[ASSIGNMENT]  WITH CHECK ADD  CONSTRAINT [FK_ASSIGNMENT_LOGIN_IDLogin_IDLogin] FOREIGN KEY([IDLogin])
REFERENCES [dbo].[LOGIN] ([IDLogin])
GO
ALTER TABLE [dbo].[ASSIGNMENT] CHECK CONSTRAINT [FK_ASSIGNMENT_LOGIN_IDLogin_IDLogin]
GO
ALTER TABLE [dbo].[DEVICE]  WITH CHECK ADD  CONSTRAINT [FK_DEVICE_ROOM_IDRoom_IDRoom] FOREIGN KEY([IDRoom])
REFERENCES [dbo].[ROOM] ([IDroom])
GO
ALTER TABLE [dbo].[DEVICE] CHECK CONSTRAINT [FK_DEVICE_ROOM_IDRoom_IDRoom]
GO
ALTER TABLE [dbo].[ROOM]  WITH CHECK ADD  CONSTRAINT [FK_ROOM_ASSIGNMENT_IDAssignment_IDAssignment] FOREIGN KEY([IDAssignment])
REFERENCES [dbo].[ASSIGNMENT] ([IDAssignment])
GO
ALTER TABLE [dbo].[ROOM] CHECK CONSTRAINT [FK_ROOM_ASSIGNMENT_IDAssignment_IDAssignment]
GO
